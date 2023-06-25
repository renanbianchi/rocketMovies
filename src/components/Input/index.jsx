import * as S from './styles'
import PropTypes from 'prop-types'

export function Input({ icon: Icon, width, margin,  ...rest}) {
  return (
    <S.Container width={width} margin={margin}>
      {Icon && <Icon size={20} />}
      <input {...rest} />
    </S.Container>
  )
}

Input.propTypes = {
  icon: PropTypes.elementType,
  color: PropTypes.string,
  width: PropTypes.string,
  margin: PropTypes.string

}; 