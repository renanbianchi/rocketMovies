import styled from 'styled-components'
import { Input } from '../Input'

export const Container = styled.div`
  z-index: 1;
  grid-area: header;
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  gap: 64px;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  padding: 0 150px;
  height: 116px;
  width: 100%;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
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

  > img {
    width: 64px;
    height: 64px;
    border-radius: 35px;
    border: 2px solid ${({ theme }) => theme.COLORS.GRAY_400};
  }
`

export const userData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  white-space: nowrap;
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`

export const userName = styled.div`
  cursor: pointer;
  white-space: nowrap;
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`

export const exit = styled.button`
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  background: none;
  border: none;
  width: fit-content;
  height: fit-content;

  &:hover {
    transform: scale(0.9);
  }
`
