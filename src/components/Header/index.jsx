import * as S from './styles'
import { FiSearch } from 'react-icons/fi'


export function Header() {
  return (
    <S.Container>
      <h1>RocketMovies</h1>
      <S.SearchBar icon={FiSearch} placeholder="Pesquisar pelo título" /> 
      <S.Profile>
      <div className="userData">
        <strong>Renan Bianchi</strong>
        <span href="#">sair</span>
      </div>
      <img src="https://github.com/renanbianchi.png" alt="foto do usuário" />
      </S.Profile>
    </S.Container>
  )
}