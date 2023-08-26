import * as S from './styles'
import { FiSearch } from 'react-icons/fi'
import { Input } from "../Input"
import { useAuth } from "../../hooks/auth"




export function Header() {
  const { signOut } = useAuth()
  return (
    <S.Container>
      <h1>RocketMovies</h1>
      <Input icon={FiSearch} placeholder="Pesquisar pelo título" /> 
      
      <S.Profile>

        <S.userData>
          <S.profileLink to="/profile">
          <strong>Renan Bianchi</strong>
          </S.profileLink>

        <S.exit onClick={signOut}>
          <span>sair</span>
        </S.exit>
        </S.userData>
      <img src="https://github.com/renanbianchi.png" alt="foto do usuário" />
      
      </S.Profile>

    </S.Container>
  )
}