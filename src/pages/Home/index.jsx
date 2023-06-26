import { Link } from 'react-router-dom'

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { FiPlus} from "react-icons/fi";
import { Card } from "../../components/Card"


import * as S from './styles'

export function Home() {
  return (
    <S.Container>
      <Header />
      <S.HomeContent>
        <S.HomeHeader>
        <h2>Meus filmes</h2>
        <Link to="/new">
        <Button icon={FiPlus} content="adicionar filme" />
        </Link>
        </S.HomeHeader>
        <Card />
        <Card />
        <Card />    
      </S.HomeContent>
    </S.Container>
    
  )
}