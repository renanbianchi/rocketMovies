import PropTypes from 'prop-types'
import * as S from './styles'
import { FiStar } from 'react-icons/fi'

export function Rating({margin, grade}) {
  let stars = []

  for (let i = 0; i < grade; i++) {
    stars.push(<FiStar key={i} fill="red" stroke="red" />)
  }
  return (
    <S.Container margin={margin}>{stars}</S.Container>
  )
}

Rating.propTypes = {
  margin: PropTypes.string,
  grade: PropTypes.number
}