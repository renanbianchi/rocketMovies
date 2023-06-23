import * as S from './styles'
import PropTypes from 'prop-types'

export function TextArea({value, ...rest}) {
  return (
    <S.Container {...rest}>
      {value}
    </S.Container>
  )
}

TextArea.propTypes = {
  value: PropTypes.string
}