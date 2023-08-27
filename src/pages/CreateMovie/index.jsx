import * as S from './styles'
import { useState } from 'react'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { Return } from '../../components/Return'
import { MovieItem } from '../../components/MovieItem'
import { Button } from '../../components/Button'





export function CreateMovie() {
  const [bookmarks, setBookmarks] = useState([])
  const [newBookmark, setNewBookmark] = useState('')

  function handleAddBookmark() {
    setBookmarks((prev) => [...prev, newBookmark])
    setNewBookmark('')
  }

  function handleRemoveBookmark (deleted) {
    setBookmarks(prev => prev.filter(bookmark => bookmark !== deleted))
  }

  
  return (
    <S.Container>
      <Header />
      <S.Content>
      <Return />
      <h1>Novo filme</h1>
      </S.Content>
      <S.Form>
        <Input width="48%" placeholder="Título" />
        <Input width="48%" placeholder="Sua nota (de 0 a 5)" />
        <TextArea placeholder="Observações"/>
      </S.Form>
      <h2>Marcadores</h2>
      <S.Marquers>
        {bookmarks.map((bookmark, index) => (
        <MovieItem 
          isNew={false}
          key={String(index)}
          value={bookmark} 
          onClick={() => {handleRemoveBookmark(bookmark)}}
        />
        ))}
        <MovieItem isNew placeholder="Novo Marcador" value={newBookmark} onChange={e => setNewBookmark(e.target.value)} onClick={handleAddBookmark}/>
      </S.Marquers>
      <S.Buttons>
        <Button content="Excluir Filme" />
        <Button content="Salvar Alterações" />
      </S.Buttons>
    </S.Container>
  )
}