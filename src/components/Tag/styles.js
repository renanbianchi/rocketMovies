import styled from "styled-components"

export const Container = styled.div`
  height: ${({height}) => height ? height : "24px"};
  width: ${({width}) => width ? width : "fit-content"};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({theme}) => theme.COLORS.PINK};
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
  padding: 5px 16px;
  border-radius: 8px;

  margin: 32px 8 32px 0; 

 > span {
   font-weight: 400;
   font-size: 12px;
   font-family: 'Roboto';
 }

`