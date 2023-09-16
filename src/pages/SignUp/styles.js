import styled from 'styled-components'
import backgroundImg from '../../assets/Background.png'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
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

  > Button {
    padding: 16px;
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center left;
  background-size: 70vw;
  opacity: 0.3;
`

export const LinkButton = styled.div`
  cursor: pointer;
  margin-top: 42px;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  > span,
  svg {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`
