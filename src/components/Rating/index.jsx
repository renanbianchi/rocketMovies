import PropTypes from 'prop-types'
import * as S from './styles'
import { FiStar } from 'react-icons/fi'

export function Rating({margin}) {
  return (
    <S.Container margin={margin}>
      <FiStar />
      <FiStar />
      <FiStar />
      <FiStar />
      <FiStar />
    </S.Container>
  )
}

Rating.propTypes = {
  margin: PropTypes.string
}