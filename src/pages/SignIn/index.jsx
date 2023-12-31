import * as S from './styles'
import { useState } from 'react'

import { FiMail, FiLock } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Loading } from '../../components/Loading'

import { useAuth } from '../../hooks/auth'
import { useNavigate } from 'react-router-dom'

export function SignIn() {
  const navigate = useNavigate()
  const [userDetails, setUserDetails] = useState({ email: '', password: '' })
  const [isLoading, setIsLoading] = useState(false)
  const { signIn } = useAuth()

  function handleSignIn() {
    setIsLoading(true)
    signIn(userDetails)
    setIsLoading(false)
  }

  const handleKeyPress = (e) => {
    if (e.keyCode === 13 || e.which === 13) {
      handleSignIn()
    }
  }

  const handleCreateAccount = () => {
    navigate('/register')
  }

  return (
    <S.Container>
      {isLoading ? (
        <>
          <Loading width="30vw" />
          <S.Background />
        </>
      ) : (
        <>
          <S.Form>
            <h1>RocketMovies</h1>
            <p>Aplicação para acompanhar tudo que assistir.</p>
            <h2>Faça seu login</h2>

            <Input
              placeholder="E-mail"
              type="text"
              icon={FiMail}
              margin="4px 0"
              onKeyPress={handleKeyPress}
              onChange={(e) =>
                setUserDetails((prev) => ({
                  ...prev,
                  email: e.target.value.trim().toLowerCase(),
                }))
              }
            />
            <Input
              placeholder="Senha"
              type="password"
              icon={FiLock}
              margin="4px 0 24px 0"
              onKeyPress={handleKeyPress}
              onChange={(e) =>
                setUserDetails((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
            />

            <Button height="56px" content="Entrar" onClick={handleSignIn} />

            <S.ButtonLink onClick={handleCreateAccount}>
              <span>Criar conta</span>
            </S.ButtonLink>
          </S.Form>

          <S.Background />
        </>
      )}
    </S.Container>
  )
}
