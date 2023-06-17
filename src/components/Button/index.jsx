import * as S from './styles'
import PropTypes from 'prop-types'

export function Button({content, icon: Icon, loading = false, ...rest}) {
  return (
    <S.Container type='button' disabled={loading} {...rest}>
      {Icon && <Icon size={20} />}
      {loading ? 'Carregando...' : content}
    </S.Container>
  )
}

Button.propTypes = {
  content: PropTypes.string,
  loading: PropTypes.bool,
  icon: PropTypes.elementType,
}