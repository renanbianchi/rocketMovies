import styled from 'styled-components'

import backgroundImg from '../../assets/Background.png'

export const Container = styled.div`
  height: 100vh;
  width: auto;
  display: flex;
  align-items: stretch;
  justify-content: center;
`

export const Form = styled.form`
  margin: 0 136px 0 136px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > h2 {
    font-size: 24px;
    margin: 48px 0;
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center right;
  background-size: 70vw;
  opacity: 0.3;
`

export const Button = styled.button``

export const ButtonLink = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: 100%;

  > span {
    margin-top: 42px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`
