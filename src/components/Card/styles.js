import styled from 'styled-components'
import { keyframes } from 'styled-components'

export const slidebottom = keyframes`
from {
  max-height: 215px;
}

to {
  max-height: 100%;
}
`

export const slidetop = keyframes`
from {
  max-height: 100%;
}

to {
  max-height: 215px;
}
`

export const Container = styled.div`
  animation: ${slidetop} 1s normal;
  animation-fill-mode: forwards;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: ${({ img }) => (img ? `url(${img})` : 'none')};
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  margin: 0 123px 24px 123px;
  border-radius: 16px;
  padding: 32px;

  > span {
    backdrop-filter: blur(1.9px);
    max-height: auto;
    margin-bottom: 24px;
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;
    color: ${({ theme }) => theme.COLORS.GRAY_500};
    text-shadow: 1px 1px 2px black, 1px 0 1px black, 1px 0 0.2px black;
  }

  :hover {
    animation: ${slidebottom} 1s linear;
    animation-fill-mode: forwards;
    cursor: default;

    > span {
      max-height: 100%;
      overflow: visible;
      margin-bottom: 24px;
      white-space: normal;
    }
  }
`
export const Titles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-shadow: 1px 1px 2px black;
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
`
