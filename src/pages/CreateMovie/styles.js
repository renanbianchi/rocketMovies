import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 100px auto;

  > h2 {
    grid-area: h2;
    margin-left: 150px;
    margin-top: 40px;
    color: ${({ theme }) => theme.COLORS.GRAY_500};
    font-weight: 400;
    font-size: 20px;
  }

  > span {
    grid-area: a;
    margin-left: 150px;
    margin-bottom: 40px;
    color: ${({ theme }) => theme.COLORS.GRAY_500};
    font-weight: 400;
    font-size: 20px;
  }

  grid-template-areas:
    'header'
    'return'
    'h1'
    'content'
    'form'
    'h2'
    'marquers'
    'a'
    'cards'
    'button';
`

export const Content = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  > h1 {
    margin: 0 150px;
    text-align: start;
    font-weight: 500;
    margin-bottom: 40px;
  }
`

export const Form = styled.form`
  width: auto;
  grid-area: form;
  margin: 0 150px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 40px;
`
export const Inputs = styled.div`
  display: flex;
  width: 100%;
  gap: 40px;
`

export const Marquers = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  height: auto;
  grid-area: marquers;
  margin: 24px 150px 40px 150px;
  padding: 16px 64px;
  border-radius: 8px;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_500};
`

export const Buttons = styled.div`
  grid-area: button;
  display: flex;
  flex-direction: row;
  gap: 40px;
  margin: 0 150px 100px 150px;
  height: 56px;

  > button:first-child {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`
export const Cards = styled.div`
  grid-area: cards;
  display: flex;
  justify-content: center;
  position: relative;
  flex-direction: row;
  flex-wrap: wrap;
  text-overflow: ellipsis;
  margin: 0 150px 100px 150px;
  max-width: auto;
  padding: 24px;
  gap: 24px;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  border-radius: 8px;
`

export const CardInfo = styled.div`
  display: flex;
  gap: 8px;
`

export const CardDescription = styled.div`
  gap: 12px;
  justify-content: center;
  display: flex;
  flex-direction: column;
`

export const Grade = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  accent-color: ${({theme}) => theme.COLORS.PINK};
`
