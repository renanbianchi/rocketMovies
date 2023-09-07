import * as S from './styles'
import PropTypes from 'prop-types'

export function MovieCard({ title, img, onclick }) {
  return (
    <S.Container onClick={onclick}>
      <span>{title}</span>
      {img && (
        <img width="156px" src={`https://image.tmdb.org/t/p/w154${img}`} />
      )}
    </S.Container>
  )
}

MovieCard.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  onclick: PropTypes.func,
}
