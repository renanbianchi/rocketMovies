import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: 'header' 'content';
`

export const HomeContent = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  text-align: center;
`

export const HomeHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 50px 123px 37px 123px;

  h2 {
    cursor: pointer;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    border-radius: 12px;
    padding: 12px;
    font-weight: 400;

    :active {
      transform: scale(0.9);
    }
  }

  > Button {
    width: fit-content;
    padding: 13px 32px;
  }
`
