import styled from "styled-components";
import { Input } from "../Input"
import { Link } from 'react-router-dom'


export const Container = styled.div`
  grid-area: header;
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  gap: 64px;
  background: ${({theme}) => theme.COLORS.BACKGROUND_900};


  padding: 0 150px;
  height: 116px;
  width: 100%;
  
  border-bottom: 1px solid ${({theme}) => theme.COLORS.GRAY_400};

  > h1 {
    color: ${({theme}) => theme.COLORS.PINK};
  }
  `

export const SearchBar = styled(Input)`
  width: 630px;
  height: 34px;
`

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  text-align: justified;
  gap: 9px;
  font-weight: 700;

  .userData {
    display: flex;
    flex-direction: column;
    justify-content: center;
    white-space: nowrap;
    font-size: 14px;

    > span {
      text-align: right;
      color: ${({theme}) => theme.COLORS.GRAY_300};
      cursor: pointer;
    }
  }

  > img {
    width: 64px;
    height: 64px;
    border-radius: 35px;
    border: 2px solid ${({theme}) => theme.COLORS.GRAY_400};
  }
`

export const userData = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  white-space: nowrap;
  font-size: 14px;
  color: ${({theme}) => theme.COLORS.WHITE};

  > span {
    text-align: right;
    color: ${({theme}) => theme.COLORS.GRAY_300};
    cursor: pointer;
  }
`

export const exit = styled(Link)`
  text-align: right;
  color: ${({theme}) => theme.COLORS.GRAY_300};
`
