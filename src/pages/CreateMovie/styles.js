import styled from "styled-components";


export const Container = styled.div`
display: grid;
grid-template-rows: 100px auto;

> h2 {
  grid-area: h2;
  margin-left: 150px;
  margin-top: 40px;
  color: ${({theme}) => theme.COLORS.GRAY_500};
  font-weight: 400;
  font-size: 20px;
}

grid-template-areas: 
  "header"
  "return"
  "h1"
  "content"
  "form"
  "h2"
  "marquers"
  "button";
`

export const Content = styled.div`
grid-area: content;
display: flex;
flex-direction: column;
justify-content: center;
align-items: left;


> h1 {
  grid-area: h1;
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
  background: ${({theme}) => theme.COLORS.BACKGROUND_500};
`

export const Buttons = styled.div`
  grid-area: button;
  display: flex;
  flex-direction: row;
  gap: 40px;
  margin: 0 150px 100px 150px;
  height: 56px;

  > button:first-child {
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_500};
    color: ${({theme}) => theme.COLORS.PINK};
  }
`