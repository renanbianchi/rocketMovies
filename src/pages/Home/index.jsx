import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../../service/api'
import { useAuth } from '../../hooks/auth'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { FiPlus } from 'react-icons/fi'
import { Card } from '../../components/Card'

import * as S from './styles'

export function Home() {
  const { signOut } = useAuth()
  const [movieNotes, setMovieNotes] = useState([])

  useEffect(() => {
    async function fetchTags() {
      try {
        const responseMovies = await api.get('/notes')
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
  }, [signOut])

  return (
    <S.Container>
      <Header />
      <S.HomeContent>
        <S.HomeHeader>
          <h2>Meus filmes</h2>
          <Link to="/new">
            <Button icon={FiPlus} content="adicionar filme" />
          </Link>
        </S.HomeHeader>
        {movieNotes
          ? movieNotes.map((note, index) => {
              return (
                <Card
                  key={index}
                  title={note.movie_title}
                  description={note.movie_description}
                  grade={note.grade}
                  rawTags={note.tags}
                  created_at={note.created_at}
                  name={note.name}
                  movie_id={note.movie_id}
                  background={note.background_path}
                />
              )
            })
          : null}
      </S.HomeContent>
    </S.Container>
  )
}
