import styled from "styled-components";

export const Container = styled.div`
  width: ${({width}) => width ? width : "100%"};
  height: 56px;
  margin: ${({margin}) => margin ? margin : "4px 0"};
  display: flex;

  align-items: center;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
  color: ${({theme}) => theme.COLORS.GRAY_100};

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