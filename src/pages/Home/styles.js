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

  > h1 {
    padding-top: 6rem;
  }

  > img {
    align-self: center;
    width: 10vw;
    padding-top: 2rem;
  }
`

export const HomeHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin: 50px 123px 37px 123px;

  > Button {
    width: fit-content;
    padding: 13px 32px;
  }
`
export const fetchButtons = styled.div`
  display: flex;
  gap: 16px;

  h2 {
    cursor: pointer;
    color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 12px;
    padding: 12px;
    font-weight: 400;

    :active {
      transform: scale(0.9);
    }
  }

  h2:nth-child(1) {
    background-color: ${({ theme, fetchAll }) =>
      fetchAll ? null : theme.COLORS.ORANGE};
  }

  h2:nth-child(2) {
    background-color: ${({ theme, fetchAll }) =>
      fetchAll ? theme.COLORS.ORANGE : null};
  }
`
