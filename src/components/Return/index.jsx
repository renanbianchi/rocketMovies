import * as S from './styles'
import { useNavigate } from 'react-router-dom'

import { FiArrowLeft } from 'react-icons/fi'

export function Return() {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
  }
  return (
    <S.Container onClick={handleGoBack}>
      <FiArrowLeft />
      <span>Voltar</span>
    </S.Container>
  )
}
