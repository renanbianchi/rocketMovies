import * as S from './styles'


export function Header() {
  return (
    <S.Container>
      <h1>RocketMovies</h1>
      <S.SearchBar placeholder="Pesquisar pelo título" />
      <S.Profile>
      <strong>Renan Bianchi</strong>
      <span>Sair</span>
      </S.Profile>
      <img src="https://github.com/renanbianchi.png" alt="foto do usuário" />
    </S.Container>
  )
}