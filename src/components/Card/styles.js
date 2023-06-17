import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
  margin: 0 123px 24px 123px;
  border-radius: 16px;
  padding: 32px;
  height: 222px;

  overflow: hidden;
  
  > span{
    height: 52px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: ${({theme}) => theme.COLORS.GRAY_500}
  }
  `

export const Rating = styled.div`
  display: flex;
  flex-direction: row;
  
  > svg {
    margin: 8px 6px 15px 0;
    justify-content: left;
    stroke: ${({theme}) => theme.COLORS.PINK};
  }
`
export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`