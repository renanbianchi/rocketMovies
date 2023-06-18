import * as S from './styles'
import { FiArrowLeft, FiUser , FiMail, FiLock, FiCamera } from "react-icons/fi";

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'



export function Profile() {
  return (
    <S.Container>
      <header>
        <FiArrowLeft />
        <span>Voltar</span>
      </header>

      <S.Avatar>    
        <img src="https://github.com/renanbianchi.png" alt="foto do usuário" />
        <label htmlFor='avatar'>
          <FiCamera />

          <input id="avatar" type="file" />

        </label>
      </S.Avatar>
      
      <S.Form>
        <Input icon={FiUser} type="text" placeholder="Renan Bianchi" />
        <Input icon={FiMail} type="email" placeholder="renanbianchi@gmail.com" />

        <Input icon={FiLock} type="password" placeholder="Senha atual" />
        <Input icon={FiLock} type="password" placeholder="Nova senha" />
        <Button content="Salvar" />
      </S.Form>

    </S.Container>
  )
}