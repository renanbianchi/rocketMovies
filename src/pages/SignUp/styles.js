import styled from "styled-components";
import backgroundImg from '../../assets/Background.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  font-family: 'Roboto Slab, sans-serif';
  
  /* padding: 0 136px 0 136px;  */
  margin: 0 136px 0 136px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h1 {
    font-size: 48px;
    color: ${({theme}) => theme.COLORS.PINK};
  }

  > h2 {
    font-size: 24px;
    margin: 48px 0;
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > a {
    margin-top: 42px;
    color: ${({ theme }) => theme.COLORS.PINK};
    display: flex;
    gap: 8px;
  }

  
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center left;
  background-size: 70vw;
  opacity: 0.3;
`