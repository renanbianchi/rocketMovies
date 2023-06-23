import * as S from './styles'
import PropTypes from 'prop-types'

export function Input({ icon: Icon, width,  ...rest}) {
  return (
    <S.Container width={width}>
      {Icon && <Icon size={20} />}
      <input {...rest} />
    </S.Container>
  )
}

Input.propTypes = {
  icon: PropTypes.elementType,
  color: PropTypes.string,
  width: PropTypes.string
}; 