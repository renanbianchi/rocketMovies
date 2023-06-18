import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  > header {
    display: flex;
    justify-content: left;
    align-items: center;

    width: 100%;
    height: 144px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    gap: 10px;

    padding-left: 144px;
    
    font-size: 16px;
    color: ${({theme}) => theme.COLORS.PINK};

    > svg {
      stroke: ${({theme}) => theme.COLORS.PINK};
    }

    > span {
      cursor: pointer;
    }
    
  }

`

export const Avatar = styled.div`
display:flex;
> img {
  width: 186px;
    height: 186px;
    border-radius: 93px;
    margin: -90px;
  }


> label {
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 48px;
  height: 48px;
  
  position: absolute;
  margin-top: 50px;
  margin-left: 40px;
  
  
  background-color: ${({theme}) => theme.COLORS.PINK};
  border-radius:50%;

  cursor: pointer;
  
  input {
    display:none;
  }

  svg {
    width: 20px;
    height: 20px;
    stroke: ${({theme}) => theme.COLORS.BACKGROUND_800};
  }
  
}
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
  width: 340px;

  > div:nth-child(2), div:nth-child(4) {
    margin-bottom: 16px;
  }

  > Input {
    height: 56px;
  }
`