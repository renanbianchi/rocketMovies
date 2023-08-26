import * as S from './styles'
import { useState } from 'react'

import { FiMail, FiLock} from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { useAuth } from '../../hooks/auth'

export function SignIn() {
  const [userDetails, setUserDetails] = useState({email: "", password: ""})
  const {signIn} = useAuth()

  function handleSignIn() {
    signIn(userDetails)
  }

  return (
    <S.Container>
      
      <S.Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>
        
        <Input placeholder="E-mail" type="text" icon={FiMail} margin="4px 0" onChange={e => setUserDetails(prev => ({...prev, email: e.target.value.toLowerCase()}))} />
        <Input placeholder="Senha" type="password" icon={FiLock} margin="4px 0 24px 0" onChange={e => setUserDetails(prev => ({...prev, password: e.target.value}))} />
        
        <Button height="56px" content="Entrar" onClick={handleSignIn} />
        
        <S.ButtonLink to="/register">
          <span>Criar conta</span>
        </S.ButtonLink>
      </S.Form>

      <S.Background />
    </S.Container>
  )
}