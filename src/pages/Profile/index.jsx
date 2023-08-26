import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import * as S from './styles'
import { FiUser , FiMail, FiLock, FiCamera } from "react-icons/fi";

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Return } from '../../components/Return'




export function Profile() {
  const navigate = useNavigate()
  const { user, updateProfile } = useAuth()

  const [userData, setUserData] = useState({name: user.name, email: user.email})

  const handleUpdateProfile = async () => {
    await updateProfile(userData)
    navigate("/")
  }

  return (
    <S.Container>
      <S.ReturnContainer>
        <Return />
      </S.ReturnContainer>
      
      <S.Profile>
        <S.Avatar>    
          <img src="https://github.com/renanbianchi.png" alt="foto do usuário" />
          <label htmlFor='avatar'>
            <FiCamera />

            <input id="avatar" type="file" />

          </label>
        </S.Avatar>
        
        <S.Form>
          <Input icon={FiUser} type="text" onChange={e => setUserData(prev => ({...prev, name: e.target.value.trim()}))} placeholder={user.name} />
          <Input icon={FiMail} type="email" onChange={e => setUserData(prev => ({...prev, email: e.target.value.trim().toLowerCase()}))} placeholder={user.email} />

          <Input icon={FiLock} onChange={e => setUserData(prev => ({...prev, oldPassword: e.target.value}))} type="password" placeholder="Senha atual" />
          <Input icon={FiLock} onChange={e => setUserData(prev => ({...prev, password: e.target.value}))} type="password" placeholder="Nova senha" />
          <Button onClick={handleUpdateProfile} content="Salvar" />
        </S.Form>
      </S.Profile>

    </S.Container>
  )
}