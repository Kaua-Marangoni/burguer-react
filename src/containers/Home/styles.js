import styled from "styled-components"

export const Container = styled.div`
    min-height: 100vh;

    background: #0A0A10;
    
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

    color: #FFFFFF;
`

export const InputLabel = styled.p`
    margin-left: 15px;

    font-weight: bold;
    font-size: 18px;
    line-height: 22px;

    letter-spacing: -0.408px;

    color: #EEEEEE;
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

    color: #FFFFFF;
    
    &::placeholder {
        color: #b3b3b3;
    }
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    
    background: #D93856;
    color: #FFFFFF;

    margin-top: 30px;

    transition: all .1s;

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
    color: #FFFFFF;

    margin: 15px 0 50px 0;

    transition: all .1s;

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