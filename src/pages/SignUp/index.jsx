import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../service/api'
import { Loading } from '../../components/Loading'

import * as S from './styles'

import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignUp() {
  const [userInfos, setUserInfos] = useState({ name: '', email: '' })
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  function handleSignUp() {
    if (
      !userInfos.name ||
      !userInfos.email ||
      !userInfos.password1 ||
      !userInfos.password2
    ) {
      return alert('Por favor, preencha todos os campos!')
    }

    if (userInfos.password1 != userInfos.password2) {
      return alert('As senhas devem ser idênticas!')
    }

    setIsLoading(true)
    api
      .post('/users', userInfos)
      .then(() => {
        alert('Usuário cadastrado com sucesso')
        navigate(-1)
        setIsLoading(false)
      })
      .catch((error) => {
        if (error.response) {
          return alert(error.response.data.message)
        } else {
          return alert('Não foi possível cadastrar')
        }
      })
  }

  const handleKeyPress = (e) => {
    if (e.keyCode === 13 || e.which === 13) {
      handleSignUp()
    }
  }

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <S.Container>
      {isLoading ? (
        <>
          <S.Background />
          <Loading width="30vw" />
        </>
      ) : (
        <>
          <S.Background />

          <S.Form>
            <h1>RocketMovies</h1>
            <p>Aplicação para acompanhar tudo que assistir.</p>
            <h2>Crie sua conta</h2>
            <Input
              placeholder="Nome Completo"
              type="text"
              icon={FiUser}
              onKeyPress={handleKeyPress}
              onChange={(e) =>
                setUserInfos((prev) => ({
                  ...prev,
                  name: e.target.value.trim(),
                }))
              }
            />
            <Input
              placeholder="E-mail"
              type="text"
              icon={FiMail}
              onKeyPress={handleKeyPress}
              onChange={(e) =>
                setUserInfos((prev) => ({
                  ...prev,
                  email: e.target.value.trim().toLowerCase(),
                }))
              }
            />
            <Input
              placeholder="Senha"
              type="password"
              icon={FiLock}
              onKeyPress={handleKeyPress}
              onChange={(e) =>
                setUserInfos((prev) => ({ ...prev, password1: e.target.value }))
              }
            />
            <Input
              placeholder="Confirme sua senha"
              type="password"
              icon={FiLock}
              onKeyPress={handleKeyPress}
              margin="4px 0 16px 0"
              onChange={(e) =>
                setUserInfos((prev) => ({ ...prev, password2: e.target.value }))
              }
            />

            <Button content="Cadastrar" onClick={handleSignUp} />

            <S.LinkButton onClick={handleGoBack}>
              <FiArrowLeft />
              <span>Voltar para o login</span>
            </S.LinkButton>
          </S.Form>
        </>
      )}
    </S.Container>
  )
}
