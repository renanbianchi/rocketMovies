import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    grid-area: return;

    width: 100%;
    height: 144px;
   
    gap: 10px;

    padding-left: 144px;
    
    font-size: 16px;
    color: ${({theme}) => theme.COLORS.PINK};

    > svg {
      stroke: ${({theme}) => theme.COLORS.PINK};
      cursor: pointer;
    }

    > span {
      cursor: pointer;
    }
`