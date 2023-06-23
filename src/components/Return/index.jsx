import * as S from './styles'

import { FiArrowLeft} from "react-icons/fi";

export function Return() {
  return (
    <S.Container>
        <FiArrowLeft />
        <span>Voltar</span>
    </S.Container>
  )
}