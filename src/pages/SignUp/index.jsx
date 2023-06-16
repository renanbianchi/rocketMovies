import * as S from './styles'

import { FiMail, FiLock, FiUser, FiArrowLeft} from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'

//import { Link } from 'react-router-dom'



export function SignUp() {
  return (
    <S.Container>
      <Header />
      <S.Background />
      <S.Form>
      <h1>RocketMovies</h1>
      <p>Aplicação para acompanhar tudo que assistir.</p>
      <h2>Crie sua conta</h2>
      <Input placeholder="Nome Completo" type="text" icon={FiUser} />
      <Input placeholder="E-mail" type="text" icon={FiMail} />
      <Input placeholder="Senha" type="password" icon={FiLock} />
      <Input placeholder="Confirme sua senha" type="password" icon={FiLock} />

      <Button content="Cadastrar" />

      
      <a href="#"><FiArrowLeft />Voltar para o login</a>

      </S.Form>
    </S.Container>
  )
}