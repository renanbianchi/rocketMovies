import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import * as S from './styles'
import { FiUser , FiMail, FiLock, FiCamera } from "react-icons/fi";
import { api } from '../../service/api';

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Return } from '../../components/Return'
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"


export function Profile() {
  const navigate = useNavigate()
  const { user, updateProfile } = useAuth()

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
  const [userData, setUserData] = useState({name: user.name, email: user.email, avatar: avatarURL})
  const [avatarFile, setAvatarFile] = useState(null)

  const handleUpdateProfile = async () => {
    await updateProfile(userData, avatarFile)
    navigate("/")
  }

  const handleChangeAvatar = (event) => {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setUserData(prev => ({...prev, avatar: imagePreview}))
  }

  return (
    <S.Container>
      <S.ReturnContainer>
        <Return />
      </S.ReturnContainer>
      
      <S.Profile>
        <S.Avatar>    
          <img src={userData.avatar} alt="foto do usuário" />
          <label htmlFor='avatar'>
            <FiCamera />

            <input id="avatar" type="file" onChange={handleChangeAvatar} />

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