import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 274px;
  border: none;
  border-radius: 10px;
  padding: 16px;
  resize: none;
  
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
  color: ${({theme}) => theme.COLORS.GRAY_100};

` 