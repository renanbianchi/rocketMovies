import * as S from './styles'
import { useState, useRef, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { Return } from '../../components/Return'
import { MovieItem } from '../../components/MovieItem'
import { Button } from '../../components/Button'
import { MovieCard } from '../../components/MovieCard'
import { api, tmdb } from '../../service/api'

/* Tentar achar um novo formato para o envio das Notas (estrelinhas se possível) */

export function CreateMovie() {
  const { state } = useLocation()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [background, setBackground] = useState('')
  const [newBookmark, setNewBookmark] = useState('')
  const [grade, setGrade] = useState('')

  const [movieId, setMovieId] = useState(0)

  const [movieData, setMovieData] = useState([])
  const [bookmarks, setBookmarks] = useState([])

  const inputTimer = useRef()

  const navigate = useNavigate()

  function handleAddBookmark() {
    const filter = bookmarks?.find(
      (bookmark) => bookmark.toLowerCase() === newBookmark.toLowerCase()
    )

    if (filter) {
      setNewBookmark('')
      return alert('Este Marcador já foi registrado')
    }

    setBookmarks((prev) => (prev ? [...prev, newBookmark] : [newBookmark]))
    setNewBookmark('')
  }

  function handleRemoveBookmark(deleted) {
    setBookmarks((prev) => prev.filter((bookmark) => bookmark !== deleted))
  }

  async function handleNewNote() {
    if (!title || !description || !grade || movieId == 0) {
      return alert(
        'Por favor, preencha todos os campos e selecione o seu filme na lista!'
      )
    }

    if (newBookmark) {
      return alert('Você tem tags digitadas mas não adicionou elas')
    }

    api.post('/notes', {
      movie_title: title,
      movie_description: description,
      tags: bookmarks,
      grade,
      movie_id: movieId,
      background_path: background,
    })

    alert('Nota criada com sucesso!')
    navigate('/')
  }

  async function handleDeleteNote() {
    if (confirm('Tem certeza que deseja excluir a nota?') == true) {
      api.delete(`/notes/${state.id}`)
      alert('Nota excluída com sucesso!')
      navigate('/')
    }
  }

  async function handleUpdateNote() {
    if (!state) {
      alert('Ocorreu um Erro, por favor, tente novamente')
      navigate('/')
    }

    if (!title || !description || !grade) {
      return alert(
        'Por favor, preencha todos os campos e selecione o seu filme na lista!'
      )
    }

    api.put('/notes', {
      note_id: state.id,
      movie_title: title,
      movie_description: description,
      tags: bookmarks,
      grade,
    })
    alert('Nota atualizada com sucesso!')
  }

  const handleInputChange = async (e) => {
    setTitle(e.target.value)
    setMovieId(0)

    clearTimeout(inputTimer.current)

    inputTimer.current = setTimeout(async () => {
      if (title) {
        try {
          const response = movieId
            ? await tmdb.get(`/3/movie/${movieId}`)
            : await tmdb.get(
                `/3/search/movie?query=${title.replace(
                  / /g,
                  '%20'
                )}&include_adult=false&language=pt-BR&page=1`
              )
          setMovieData(response.data.results)
        } catch (error) {
          console.error('Error fetching data:', error)
        }
      }
    }, 3000)
  }

  useEffect(() => {
    if (state) {
      setTitle(state.movie_title)
      setGrade(state.grade)
      setDescription(state.movie_description)
      setBookmarks(state?.tags?.split(','))
    } else {
      return undefined
    }
  }, [state])

  return (
    <S.Container>
      <Header />
      <S.Content>
        <Return />
        <h1>{state ? `Editar Filme` : `Novo filme`}</h1>
      </S.Content>
      <S.Form>
        <S.Inputs>
          <Input
            width="100%"
            placeholder="Título"
            value={title}
            disabled={state ? true : false}
            onChange={state ? null : handleInputChange}
          />

          <Input
            width="100%"
            placeholder="Sua nota (de 0 a 5)"
            onChange={(e) => setGrade(e.target.value)}
            value={grade}
          />
        </S.Inputs>

        <TextArea
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Observações"
          defaultValue={state ? description : ''}
        />
      </S.Form>
      <h2>Marcadores</h2>
      <S.Marquers>
        {bookmarks?.map((bookmark, index) => (
          <MovieItem
            isNew={false}
            key={String(index)}
            value={bookmark}
            onClick={() => {
              handleRemoveBookmark(bookmark)
            }}
          />
        ))}
        <MovieItem
          isNew
          placeholder="Novo Marcador"
          value={newBookmark}
          onChange={(e) => setNewBookmark(e.target.value)}
          onClick={handleAddBookmark}
        />
      </S.Marquers>

      {movieData.length && (
        <>
          <span>
            {movieId == 0 ? `Escolha qual é o filme` : `O filme escolhido`}
          </span>

          <S.Cards>
            {movieId == 0
              ? movieData.map((movie, index) => {
                  return (
                    <MovieCard
                      onclick={() => {
                        setMovieId(movie.id),
                          setTitle(movie.title),
                          setBackground(movie.backdrop_path)
                      }}
                      key={index}
                      title={movie.title}
                      img={movie.poster_path}
                    />
                  )
                })
              : movieData
                  .filter((selectedMovie) => {
                    return selectedMovie.id === movieId
                  })
                  .map((movie) => {
                    return (
                      <S.CardInfo key={movie.id}>
                        <MovieCard
                          title={movie.title}
                          img={movie.poster_path}
                        />
                        <S.CardDescription>
                          <h2>Descrição</h2>
                          <span>{movie.overview}</span>
                          <h2>Título original</h2>
                          <span>{movie.original_title}</span>
                          <h2>Data de lançamento</h2>
                          <span>
                            {new Date(movie.release_date).toLocaleDateString(
                              'pt-BR'
                            )}
                          </span>
                        </S.CardDescription>
                      </S.CardInfo>
                    )
                  })}
          </S.Cards>
        </>
      )}
      {state ? (
        <S.Buttons>
          <Button content="Excluir Filme" onClick={handleDeleteNote} />
          <Button content="Salvar Alterações" onClick={handleUpdateNote} />
        </S.Buttons>
      ) : (
        <S.Buttons>
          <Button content="Salvar Alterações" onClick={handleNewNote} />
        </S.Buttons>
      )}
    </S.Container>
  )
}
