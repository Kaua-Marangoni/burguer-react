import React, { useState, useRef } from "react"

import axios from "axios"

import { useHistory } from "react-router-dom"

import InitialImage from "../../assets/initial-image.png"


import { Container, Image, ContainerItens, H1, InputLabel, Input, Button, ButtonGoOrders } from "./styles"

const App = () => {
  const [newOrder, setNewOrder] = useState([])
  const inputNameOrder = useRef()
  const inputNameClient = useRef()

  const history = useHistory()

  const goPageOrders = () => {
    history.push("/orders")
  }

  const addNewOrder = async () => {
    const { data: order } = await axios.post("https://teste-burguer.herokuapp.com/order", {
      order: inputNameOrder.current.value,
      clientName: inputNameClient.current.value
    })

    setNewOrder([...newOrder, order])
    goPageOrders()
  }


  return (
    <Container>
      <Image src={InitialImage} alt="Imagem Inicial" />

      <ContainerItens>
        
        <H1>Faça seu pedido!</H1>

        <InputLabel>Pedido</InputLabel>
        <Input ref={inputNameOrder} placeholder="Ex: 1 Coca-Cola, 1-X Salada" />

        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputNameClient} placeholder="Ex: Steve Jobs" />

        <Button onClick={addNewOrder}>Novo Pedido</Button>
        <ButtonGoOrders onClick={goPageOrders}>Ver Pedidos</ButtonGoOrders>

      </ContainerItens>

    </Container>
  )
}

export default App