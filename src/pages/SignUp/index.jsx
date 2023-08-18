import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../service/api'

import * as S from './styles'

import { FiMail, FiLock, FiUser, FiArrowLeft} from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'





export function SignUp() {
  const [userInfos, setUserInfos] = useState({name: "", email: ""})
  const navigate = useNavigate()
  
  function handleSignUp() {
    console.log(userInfos)

    if (!userInfos.name || !userInfos.email || !userInfos.password1 || !userInfos.password2) {
      return alert("Por favor, preencha todos os campos!")
    }

    if (userInfos.password1 != userInfos.password2) {
      return alert("As senhas devem ser idênticas!")
    }

    api.post("/users", userInfos)
    .then(() => {
      alert("Usuário cadastrado com sucesso")
      navigate("/")
    })
    .catch( error => {
      if (error.response) {
        return alert(error.response.data.message)
      }
      else {
        return alert("Não foi possível cadastrar")
      }
    })
  }

  return (
    <S.Container>
      <S.Background />
      
      <S.Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>
        <Input placeholder="Nome Completo" type="text" icon={FiUser} onChange={e => setUserInfos(prev => ({...prev, name: e.target.value}))}/>
        <Input placeholder="E-mail" type="text" icon={FiMail} onChange={e => setUserInfos(prev => ({...prev, email: e.target.value}))} />
        <Input placeholder="Senha" type="password" icon={FiLock} onChange={e => setUserInfos(prev => ({...prev, password1: e.target.value}))} />
        <Input placeholder="Confirme sua senha" type="password" icon={FiLock} margin="4px 0 16px 0" onChange={e => setUserInfos(prev => ({...prev, password2: e.target.value}))} />

        <Button content="Cadastrar" onClick={handleSignUp} />

        <S.LinkButton to="/">
          <FiArrowLeft /><span>Voltar para o login</span>
        </S.LinkButton>
        
      </S.Form>
    </S.Container>
  )
}