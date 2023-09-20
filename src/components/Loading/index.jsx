import * as S from './styles'
import PropTypes from 'prop-types'

export function Loading({ width }) {
  return (
    <S.Container width={width}>
      <div className="loadingio-spinner-eclipse-sq1scdfkwn">
        <div className="ldio-6ziufiyb62s">
          <div></div>
        </div>
      </div>
    </S.Container>
  )
}

Loading.propTypes = {
  width: PropTypes.string,
}
