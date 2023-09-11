import * as S from './styles'
import PropTypes from 'prop-types'
import { Rating } from '../../components/Rating'
import { Tag } from '../Tag'
import { Link } from 'react-router-dom'

export function Card({ note }) {
  const tags = note.tags?.split(',')
  const date = `${new Date(note.created_at).toLocaleDateString(
    'pt-BR'
  )} às ${new Date(note.created_at).toLocaleTimeString('pt-BR')}`

  return (
    <S.Container
      img={`https://image.tmdb.org/t/p/w780/${note.background_path}`}
    >
      <Link to="/new" state={note}>
        <S.Titles>
          <h1>{note.movie_title}</h1>
          <span>
            Adicionado por {note.name} em {date}
          </span>
        </S.Titles>
        <Rating grade={note.grade} margin="8px 0" />
        <span>{note.movie_description}</span>
        <S.Tags>
          {tags &&
            tags.map((tag, index) => {
              return <Tag key={index} content={tag} />
            })}
        </S.Tags>
      </Link>
    </S.Container>
  )
}

Card.propTypes = {
  note: PropTypes.object,
}
