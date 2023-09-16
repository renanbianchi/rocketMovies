import * as S from './styles'
import { FiSearch } from 'react-icons/fi'
import PropTypes from 'prop-types'

import { Input } from '../Input'
import { useAuth } from '../../hooks/auth'
import { api } from '../../service/api'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { useNavigate } from 'react-router-dom'

export function Header({ onDataChange }) {
  const navigate = useNavigate()
  const { signOut, user } = useAuth()

  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  const handleEditProfile = () => {
    navigate('/profile')
  }

  const handleSignOut = () => {
    navigate('/')
    signOut()
  }

  return (
    <S.Container>
      <h1>RocketMovies</h1>
      <Input
        onChange={(e) => onDataChange(e.target.value)}
        icon={FiSearch}
        placeholder="Pesquisar pelo título"
      />

      <S.Profile>
        <S.userData>
          <S.userName onClick={handleEditProfile}>
            <strong>{user.name}</strong>
          </S.userName>

          <S.exit onClick={handleSignOut}>
            <span>sair</span>
          </S.exit>
        </S.userData>
        <img src={avatarURL} alt={user.name} />
      </S.Profile>
    </S.Container>
  )
}

Header.propTypes = {
  onDataChange: PropTypes.func,
}
