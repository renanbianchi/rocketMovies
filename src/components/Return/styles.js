import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  grid-area: return;

  width: fit-content;

  gap: 10px;

  margin: 64px 0 64px 144px;

  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.PINK};

  > svg {
    stroke: ${({ theme }) => theme.COLORS.PINK};
    cursor: pointer;
  }

  > span {
    cursor: pointer;
  }
`
