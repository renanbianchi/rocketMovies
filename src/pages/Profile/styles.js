import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;

`
export const ReturnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  background: ${({theme}) => theme.COLORS.BACKGROUND_700};
`
export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Avatar = styled.div`
grid-area: avatar;
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
  grid-area: form;
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