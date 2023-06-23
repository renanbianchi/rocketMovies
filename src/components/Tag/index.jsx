import * as S from './styles'
import PropTypes from 'prop-types'


export function Tag({ content, width, height}) {
  return (
    <S.Container width={width} height={height}>
      <span>{content}</span>
    </S.Container>
  )
}

Tag.propTypes = {
  content: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
}