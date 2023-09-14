import * as S from './styles'
import PropTypes from 'prop-types'
import { Rating } from '../../components/Rating'
import { Tag } from '../Tag'
import { api } from '../../service/api'
import { useAuth } from '../../hooks/auth'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Card({ note }) {
  const { user } = useAuth()
  const avatarURL = note.avatar
    ? `${api.defaults.baseURL}/files/${note.avatar}`
    : avatarPlaceholder
  const tags = note.tags?.split(',')
  const date = `${new Date(note.created_at).toLocaleDateString(
    'pt-BR'
  )} às ${new Date(note.created_at).toLocaleTimeString('pt-BR')}`

  return (
    <S.Container>
      <S.Linker disabled={true} to={user.id === note.user_id ? "/new" : null} state={note}>
        <S.Titles>
          <h1>{note.movie_title}</h1>
          <span>
            <img src={avatarURL} />
            Por {note.name} em {date}
          </span>
        </S.Titles>
        <Rating grade={note.grade} margin="8px 0" />
        <span>{note.movie_description}</span>{' '}
        <S.Tags>
          {tags &&
            tags.map((tag, index) => {
              return <Tag key={index} content={tag} />
            })}
        </S.Tags>
      </S.Linker>
      <img src={`https://image.tmdb.org/t/p/w780/${note.background_path}`} />
    </S.Container>
  )
}

Card.propTypes = {
  note: PropTypes.object,
}
