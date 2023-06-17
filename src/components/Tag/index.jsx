import * as S from './styles'
import PropTypes from 'prop-types'


export function Tag({content}) {
  return (
    <S.Container>
      <span>{content}</span>
    </S.Container>
  )
}

Tag.propTypes = {
  content: PropTypes.string
}