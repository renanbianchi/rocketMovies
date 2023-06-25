import styled from "styled-components";

export const Container = styled.div`
display: grid;
grid-template-rows: 80px;
grid-template-areas:
"header"
"return"
"details";
`

export const Details = styled.div`
grid-area: details;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;
margin: 0 150px;

text-align: justified;

`

export const DetailHeader = styled.div`
display: flex;
flex-direction: row;
justify-content: left;
align-items: center; 
gap: 24px;
`

export const Tags = styled.div`
display: flex;
flex-direction: row;
gap: 8px;
`

export const Author = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 8px;
> img {
  grid-area: img;
  width: 16px;
  height: 16px;
  border-radius: 10px;
}

> svg {
  stroke: ${({theme}) => theme.COLORS.PINK}
}
`

