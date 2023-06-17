import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  overflow-y: auto;

`

export const HomeHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 150px 123px 37px 123px;

h2 {
  color: ${({ theme }) => theme.COLORS.WHITE };
  font-weight: 400;
}

> Button {
  width: fit-content;
  padding: 13px 32px; 
}
`