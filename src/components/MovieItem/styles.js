import styled from "styled-components"


export const Container = styled.div`
  height: ${({height}) => height ? height : "56px"};
  width: ${({width}) => width ? width : "fit-content"};
  display: flex;
  justify-content: center;
  align-items: center;
  
  background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_600};
  border: ${({isNew}) => isNew ? "2px dashed #948F99" : "none" };
  padding: 5px 16px;
  border-radius: 8px;

  margin: 20px 16px; 

 > input {
    cursor: ${({isNew}) => isNew ? "text" : "default"};
    background: none;
    border: none;
    font-weight: 400;
    font-size: 16px;
    font-family: 'Roboto';
    color: ${({theme}) => theme.COLORS.WHITE};
 }

 > button {
    background: none;
    border: none;
    
    svg {
      stroke: ${({theme}) => theme.COLORS.PINK};
    }
 }

`