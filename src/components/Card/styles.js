import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`


  max-height: 215px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 2px 3px 8px 0px rgba(0, 0, 0, 0.75);

  background-position: right;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  margin: 0 123px 24px 123px;
  border-radius: 16px;
  transition: max-height 2s;

  > img {
    border-radius: 0 16px 16px 0;
    box-shadow: inset 94px 0px 0px -17px rgba(255, 255, 255, 1);
  }

  :hover {
    max-height: 100%;
    cursor: none;
  }
`

export const Linker = styled(Link)`
  padding: 12px 32px;
  margin-bottom: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.COLORS.GRAY_500};
  text-shadow: 1px 1px 2px black, 1px 0 1px black, 1px 0 0.2px black;

  > img {
    border: 1px solid red;
    box-shadow: inset 94px 0px 0px -17px rgba(255, 255, 255, 1);
  }

  color: ${({ theme }) => theme.COLORS.WHITE};
`

export const Titles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  > span {
    display: flex;
    align-items: center;

    img {
      margin-right: 12px;
      width: 24px;
      height: 24px;
      border-radius: 35px;
      border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
    }
  }
`

export const Rating = styled.div`
  display: flex;
  flex-direction: row;

  > svg {
    margin: 8px 6px 15px 0;
    justify-content: left;
    stroke: ${({ theme }) => theme.COLORS.PINK};
  }
`
export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding-top: 20px;
`
