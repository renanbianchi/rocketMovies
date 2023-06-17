import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { FiPlus} from "react-icons/fi";
import { Card } from "../../components/Card"
import * as S from './styles'

export function Home() {
  return (
    <S.Container>
      <Header />
      <S.HomeHeader>
      <h2>Meus filmes</h2>
      <Button icon={FiPlus} content="adicionar filme" />
      </S.HomeHeader>
      <Card />
      <Card />
      <Card />    
    </S.Container>
    
  )
}