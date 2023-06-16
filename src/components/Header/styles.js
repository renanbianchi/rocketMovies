import styled from "styled-components";
import { Input } from "../Input"

export const SearchBar = styled(Input)`
width: 64px;
background-color: red;
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100px;
  width: 100%;
  justify-content: space-around;
  border-bottom: 1px solid ${({theme}) => theme.COLORS.WHITE};

 /*  > input {
    height: 64px;
  } */

  > h1 {
    color: ${({theme}) => theme.COLORS.PINK};
  }

  > img {
    width: 64px;
    height: 64px;
    border-radius: 35px;
    border: 1px solid red;
  }
`

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`