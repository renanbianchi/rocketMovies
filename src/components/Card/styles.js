import styled from 'styled-components'

export const Container = styled.div`
  cursor: ${({ isCreator }) => (isCreator ? `pointer` : `default`)};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 2px 3px 8px 0px rgba(0, 0, 0, 0.75);

  background-position: right;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  margin: 0 123px 24px 123px;
  border-radius: 16px;
  max-height: 215px;
  transition: all 2s;

  > img {
    border-radius: 0 16px 16px 0;
    width: 500px;
    object-fit: cover;
    mask-image: linear-gradient(270deg, rgba(0, 0, 0, 1), transparent);
  }

  :hover {
    max-height: 100%;
    cursor: context-menu;
  }

  @media (max-width: 1300px) {
    max-height: max-content;
    width: 80vw;

    scrollbar-width: auto;

    > img {
      display: none;
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  padding: 12px 32px;
  margin-bottom: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
`

export const Titles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  > span {
    display: flex;
    align-items: center;

    img {
      margin-right: 12px;
      width: 24px;
      height: 24px;
      border-radius: 35px;
      border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
    }
  }
`

export const Rating = styled.div`
  display: flex;
  flex-direction: row;

  > svg {
    margin: 8px 6px 15px 0;
    justify-content: left;
    stroke: ${({ theme }) => theme.COLORS.PINK};
  }
`
export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding-top: 20px;
`
