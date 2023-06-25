import * as S from './styles'

import { FiMail, FiLock} from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

//import { Link } from 'react-router-dom'



export function SignIn() {
  return (
    <S.Container>
      <S.Form>
      <h1>RocketMovies</h1>
      <p>Aplicação para acompanhar tudo que assistir.</p>
      <h2>Faça seu login</h2>
      <Input placeholder="E-mail" type="text" icon={FiMail} margin="4px 0" />
      <Input placeholder="Senha" type="password" icon={FiLock} margin="4px 0 24px 0" />

      <Button content="Entrar" />

      <a href="#">Criar conta</a>

      </S.Form>
      <S.Background />
    </S.Container>
  )
}