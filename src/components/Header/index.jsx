import * as S from './styles'
import { FiSearch } from 'react-icons/fi'
import { Input } from "../Input"
import { useAuth } from "../../hooks/auth"
import { api } from '../../service/api';
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"





export function Header() {
  
  const { signOut, user } = useAuth()

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
  return (
    <S.Container>
      <h1>RocketMovies</h1>
      <Input icon={FiSearch} placeholder="Pesquisar pelo título" /> 
      
      <S.Profile>

        <S.userData>
          <S.profileLink to="/profile">
          <strong>{user.name}</strong>
          </S.profileLink>

        <S.exit onClick={signOut}>
          <span>sair</span>
        </S.exit>
        </S.userData>
      <img src={avatarURL} alt={user.name} />
      
      </S.Profile>

    </S.Container>
  )
}