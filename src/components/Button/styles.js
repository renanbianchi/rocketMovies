import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.PINK };
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800 };

  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  padding: 0 16px;
  border-radius: 10px;
  font-weight: 500;

  > svg {
    margin-right: 8px;
  }

  &:disabled {
    opacity: 0.5;
  }
`