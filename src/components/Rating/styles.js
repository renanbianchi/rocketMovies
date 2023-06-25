import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-area: rating;
  gap: 10px;
  margin: ${({margin}) => margin ? margin : "0"};
  
  
  > svg {
    width: 20px;
    height: 20px;
    stroke: ${({theme}) => theme.COLORS.PINK};
    fill: ${({theme}) => theme.COLORS.PINK};
  }
`