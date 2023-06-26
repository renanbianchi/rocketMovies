import * as S from './styles'

import { FiMail, FiLock, FiUser, FiArrowLeft} from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'





export function SignUp() {
  return (
    <S.Container>
      <S.Background />
      <S.Form>
      <h1>RocketMovies</h1>
      <p>Aplicação para acompanhar tudo que assistir.</p>
      <h2>Crie sua conta</h2>
      <Input placeholder="Nome Completo" type="text" icon={FiUser} />
      <Input placeholder="E-mail" type="text" icon={FiMail} />
      <Input placeholder="Senha" type="password" icon={FiLock} />
      <Input placeholder="Confirme sua senha" type="password" icon={FiLock} margin="4px 0 16px 0" />

      <Button content="Cadastrar" />

      <S.LinkButton to="/">
        <FiArrowLeft /><span>Voltar para o login</span>
      </S.LinkButton>
      </S.Form>
    </S.Container>
  )
}