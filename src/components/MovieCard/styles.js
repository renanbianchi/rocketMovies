import styled from 'styled-components'

export const Container = styled.button`
  background: none;
  color: white;
  border-radius: 12px;
  border: 2px solid ${({ theme }) => theme.COLORS.ORANGE};
  padding: 8px;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  gap: 12px;

  > span {
    text-overflow: ellipsis;
    white-space: break-spaces;
    width: 128px;
  }
`
