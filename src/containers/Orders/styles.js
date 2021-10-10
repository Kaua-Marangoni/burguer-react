import styled from "styled-components"

export const Container = styled.div`
    min-height: 100vh;

    background: #0A0A10;
    
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Image = styled.img`
    width: 160px;
    margin: 10px 0 25px 0;
`

export const ContainerItens = styled.div`
    display: flex;
    flex-direction: column;
`

export const H1 = styled.h1`
    margin-bottom: 10px;

    font-weight: bold;
    font-size: 28px;
    line-height: 33px;

    text-align: center;

    color: #FFFFFF;
`

export const NumberOrders = styled.p`
    margin-bottom: 50px;

    font-weight: bold;
    font-size: 18px;
    line-height: 33px;

    text-align: center;

    color: #FFFFFF;
`

export const DataOrder = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 18px;

    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;

    width: 342px;
    height: 101px;

    button {
        width: 24px;
        margin-right: 15px;
        background: none;
        border: none;
        cursor: pointer;
    }
`

export const Data = styled.div`
    display: flex;
    flex-direction: column;

    margin-left: 25px;
`

export const NameOrder = styled.p`
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;

    margin-bottom: 15px;

    color: #FFFFFF;
`

export const Name = styled.p`
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;

    color: #FFFFFF;

`

export const Button = styled.button`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;

    background: rgba(255, 255, 255, 0.14);
    color: #FFFFFF;

    margin: 67px 0 50px 0;

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