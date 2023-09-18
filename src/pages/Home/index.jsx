import { useState, useEffect } from 'react'
import { api } from '../../service/api'
import { useAuth } from '../../hooks/auth'
import { useNavigate } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { FiPlus } from 'react-icons/fi'
import { Card } from '../../components/Card'
import { Loading } from '../../components/Loading'
import emptynotes from '../../assets/empty_notes.svg'

import * as S from './styles'

export function Home() {
  const navigate = useNavigate()
  const { signOut } = useAuth()
  const [movieNotes, setMovieNotes] = useState([])
  const [fetchAll, setFetchAll] = useState(true)
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = (searchData) => {
    const filteredNotes = movieNotes.filter((note) =>
      note.movie_title.toLowerCase().includes(searchData.toLowerCase())
    )
    setSearch(filteredNotes)
  }

  const handleCreateNote = () => {
    navigate('/new')
  }

  useEffect(() => {
    async function fetchTags() {
      try {
        setIsLoading(true)
        const responseMovies = await api.get(fetchAll ? '/notes/all' : '/notes')
        setMovieNotes(responseMovies.data)
        setIsLoading(false)
      } catch (error) {
        alert('Ocorreu um erro, por favor, tente novamente.')
        const e = error.response.data.message
        console.error(e)
        if (e === 'JWT Token inválido') {
          signOut()
        }
      }
    }
    fetchTags()
  }, [signOut, fetchAll])

  return isLoading ? (
    <Loading />
  ) : (
    <S.Container>
      <Header onDataChange={handleSearch} />
      <S.HomeContent>
        <S.HomeHeader>
          <S.fetchButtons fetchAll={fetchAll}>
            <h2 onClick={() => setFetchAll(false)}>Meus filmes</h2>
            <h2 onClick={() => setFetchAll(true)}>Todos os Filmes</h2>
          </S.fetchButtons>

          <Button
            onClick={handleCreateNote}
            icon={FiPlus}
            content="adicionar filme"
          />
        </S.HomeHeader>
        {movieNotes.length > 0 ? (
          search ? (
            search.map((note, index) => {
              return <Card key={index} note={note} />
            })
          ) : (
            movieNotes.map((note, index) => {
              return <Card key={index} note={note} />
            })
          )
        ) : (
          <>
            <h1>Ops, Não há nenhum filme por aqui</h1>
            <img src={emptynotes} alt="Empty Notes" />
          </>
        )}
      </S.HomeContent>
    </S.Container>
  )
}
