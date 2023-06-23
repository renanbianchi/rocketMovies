import * as S from './styles'
import { useState } from 'react'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { Return } from '../../components/Return'
import { MovieItem } from '../../components/MovieItem'
import { Button } from '../../components/Button'





export function CreateMovie() {
  const [isNew, setIsNew] = useState(true)

  const isNewHandler = () => {
    setIsNew(!isNew)
  } 
  
  return (
    <S.Container>
      <Header />
      <S.Content>
      <Return />
      <h1>Novo filme</h1>
      </S.Content>
      <S.Form>
        <Input width="48.5%" placeholder="Título" />
        <Input width="48.5%" placeholder="Sua nota (de 0 a 5)" />
        <TextArea placeholder="Observações"/>
      </S.Form>
      <h2>Marcadores</h2>
      <S.Marquers>
        <MovieItem isNew={isNew} placeholder="Novo Marcador" onClick={isNewHandler}/>
      </S.Marquers>
      <S.Buttons>
        <Button content="Excluir Filme" />
        <Button content="Salvar Alterações" />
      </S.Buttons>
    </S.Container>
  )
}