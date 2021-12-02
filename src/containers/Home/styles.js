import styled from "styled-components"

export const Container = styled.div`
  min-height: 100vh;

  background: #0a0a10;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Image = styled.img`
  width: 260px;
  margin: 10px 0 25px 0;
`

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
`

export const H1 = styled.h1`
  margin-bottom: 50px;

  font-weight: bold;
  font-size: 28px;
  line-height: 33px;

  text-align: center;

  color: #ffffff;
`

export const InputLabel = styled.p`
  margin-left: 15px;

  font-weight: bold;
  font-size: 18px;
  line-height: 22px;

  letter-spacing: -0.408px;

  color: #eeeeee;
`

export const Input = styled.input`
  width: 342px;
  height: 58px;

  padding-left: 15px;
  margin-bottom: 25px;

  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  border: none;
  outline: none;

  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;

  color: #ffffff;

  &::placeholder {
    color: #b3b3b3;
  }
`

export const Loading = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const ErrorInput = styled.p``

export const Button = styled.button`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  background: #d93856;
  color: #ffffff;

  margin-top: 30px;

  transition: all 0.1s;

  width: 342px;
  height: 68px;

  border-radius: 14px;
  border: none;
  outline: none;

  font-weight: 900;
  font-size: 17px;
  line-height: 2px;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`

export const ButtonGoOrders = styled.button`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  background: #e67e22;
  color: #ffffff;

  margin: 15px 0 50px 0;

  transition: all 0.1s;

  width: 342px;
  height: 68px;

  border-radius: 14px;
  border: none;
  outline: none;

  font-weight: 900;
  font-size: 17px;
  line-height: 2px;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`
