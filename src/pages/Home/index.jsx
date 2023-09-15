import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../../service/api'
import { useAuth } from '../../hooks/auth'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { FiPlus } from 'react-icons/fi'
import { Card } from '../../components/Card'
import emptynotes from '../../assets/empty_notes.svg'

import * as S from './styles'

export function Home() {
  const { signOut } = useAuth()
  const [movieNotes, setMovieNotes] = useState([])
  const [fetchAll, setFetchAll] = useState(true)
  const [search, setSearch] = useState('')

  const handleSearch = (searchData) => {
    const filteredNotes = movieNotes.filter((note) =>
      note.movie_title.toLowerCase().includes(searchData.toLowerCase())
    )
    setSearch(filteredNotes)
  }

  useEffect(() => {
    async function fetchTags() {
      try {
        const responseMovies = await api.get(fetchAll ? '/notes/all' : '/notes')
        setMovieNotes(responseMovies.data)
      } catch (error) {
        const e = error.response.data.message
        console.error(e)
        if (e === 'JWT Token inválido') {
          signOut()
        }
      }
    }
    fetchTags()
  }, [signOut, fetchAll])

  return (
    <S.Container>
      <Header onDataChange={handleSearch} />
      <S.HomeContent>
        <S.HomeHeader>
          <S.fetchButtons fetchAll={fetchAll}>
            <h2 onClick={() => setFetchAll(false)}>Meus filmes</h2>
            <h2 onClick={() => setFetchAll(true)}>Todos os Filmes</h2>
          </S.fetchButtons>
          <Link to="/new">
            <Button icon={FiPlus} content="adicionar filme" />
          </Link>
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
