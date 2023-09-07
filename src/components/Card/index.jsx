import * as S from './styles'
import PropTypes from 'prop-types'
import { Rating } from '../../components/Rating'
import { Tag } from '../Tag'

export function Card({
  title,
  description,
  grade,
  rawTags,
  created_at,
  name,
  background,
}) {
  const tags = rawTags.split(',')
  const date = `${new Date(created_at).toLocaleDateString(
    'pt-BR'
  )} às ${new Date(created_at).toLocaleTimeString('pt-BR')}`

  return (
    <S.Container img={`https://image.tmdb.org/t/p/w780/${background}`}>
      <S.Titles>
        <h1>{title}</h1>
        <span>
          Adicionado por {name} em {date}
        </span>
      </S.Titles>
      <Rating grade={grade} margin="8px 0" />
      <span>{description}</span>
      <S.Tags>
        {tags &&
          tags.map((tag, index) => {
            return <Tag key={index} content={tag} />
          })}
      </S.Tags>
    </S.Container>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  grade: PropTypes.number,
  rawTags: PropTypes.string,
  created_at: PropTypes.string,
  name: PropTypes.string,
  background: PropTypes.string,
}
