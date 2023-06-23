import styled from "styled-components";

export const Container = styled.div`
  width: ${({width}) => width ? width : "100%"};
  height: 56px;
  display: flex;

  align-items: center;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
  color: ${({theme}) => theme.COLORS.GRAY_100};

  margin-bottom: 8px;
  border-radius: 10px;

  > svg {
    margin-left: 16px;
  }

  > input {
    width: inherit;
    color: ${({theme}) => theme.COLORS.WHITE};
    background: transparent;
    border: none;
    font-size: 14px;
    padding: 12px;

    &:placeholder {
      color: ${({theme}) => theme.COLORS.GRAY_300}
    }
  }
`