import * as S from './styles'
import PropTypes from 'prop-types'

export function Button({content, loading = false, ...rest}) {
  return (
    <S.Container type='button' disabled={loading} {...rest}>
      {loading ? 'Carregando...' : content}
    </S.Container>
  )
}

Button.propTypes = {
  content: PropTypes.string,
  loading: PropTypes.bool
}