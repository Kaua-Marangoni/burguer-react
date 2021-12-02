import axios from "axios"
import React, { useState, useRef } from "react"
import { useHistory } from "react-router-dom"
import { toast } from "react-toastify"

import InitialImage from "../../assets/initial-image.png"
import {
  Container,
  Image,
  ContainerItens,
  H1,
  InputLabel,
  Input,
  Button,
  ButtonGoOrders
} from "./styles"

const App = () => {
  const [newOrder, setNewOrder] = useState([])

  const inputNameOrder = useRef()
  const inputNameClient = useRef()

  const history = useHistory()

  const goPageOrders = () => {
    history.push("/orders")
  }

  const addNewOrder = async () => {
    if (
      inputNameOrder.current.value <= 0 ||
      inputNameClient.current.value <= 0
    ) {
      toast.error("Os campos são obrigatórios")
    } else {
      const { data: order } = await toast.promise(
        axios.post("https://burguer-backend.herokuapp.com/order", {
          order: inputNameOrder.current.value,
          clientName: inputNameClient.current.value
        }),
        {
          pending: "Enviando dados",
          success: "Pedido adicionado!",
          error: "Falha no sistema, por favor tente novamente!"
        }
      )

      setNewOrder([...newOrder, order])

      goPageOrders()
    }
  }

  return (
    <Container>
      <Image src={InitialImage} alt="Imagem Inicial" />

      <ContainerItens>
        <H1>Faça seu pedido!</H1>

        <InputLabel>Pedido</InputLabel>
        <Input
          ref={inputNameOrder}
          name="nameOrder"
          placeholder="Ex: 1 Coca-Cola, 1-X Salada"
        />

        <InputLabel>Nome do Cliente</InputLabel>
        <Input
          ref={inputNameClient}
          name="nameClient"
          placeholder="Ex: Steve Jobs"
        />

        <Button onClick={addNewOrder}>Novo Pedido</Button>

        <ButtonGoOrders onClick={goPageOrders}>Ver Pedidos</ButtonGoOrders>
      </ContainerItens>
    </Container>
  )
}

export default App
