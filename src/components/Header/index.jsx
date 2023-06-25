import * as S from './styles'
import { FiSearch } from 'react-icons/fi'
import { Input } from "../Input"



export function Header() {
  return (
    <S.Container>
      <h1>RocketMovies</h1>
      <Input icon={FiSearch} placeholder="Pesquisar pelo título" /> 
      <S.Profile>
      <div className="userData">
        <S.userData to="/profile">
          <strong>Renan Bianchi</strong>
        </S.userData>
        <S.exit to="/">
          <span>sair</span>
        </S.exit>
      </div>
      
      <img src="https://github.com/renanbianchi.png" alt="foto do usuário" />
      </S.Profile>
    </S.Container>
  )
}