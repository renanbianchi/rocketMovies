import * as S from './styles'
import PropTypes from 'prop-types'
import { FiPlus, FiX } from "react-icons/fi";


export function MovieItem({ isNew, value, onClick, width, height, ...rest}) {
  return (
    <S.Container isNew={isNew} width={width} height={height}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />
      <button type="button" onClick={onClick}>{isNew ? <FiPlus /> : <FiX />}</button>
    </S.Container>
  )
}

MovieItem.propTypes = {
  isNew: PropTypes.bool,
  onClick: PropTypes.func,
  value: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
}