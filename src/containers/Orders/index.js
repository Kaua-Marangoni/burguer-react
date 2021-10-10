import React, { useState, useEffect } from "react"

import axios from "axios"

import { useHistory } from "react-router-dom"

import ImageOrder from "../../assets/image-order.svg"
import TrashImage from "../../assets/trash.svg"

import { Container, Image, ContainerItens, H1, NumberOrders, DataOrder, Data, NameOrder, Name, Button } from "./styles"

const Orders = () => {
  const [newOrder, setNewOrder] = useState([])
  
  const history = useHistory()

  const goBackPage = () => {
    history.push("/")
  }

  useEffect(() => {
    const fetchOrders = async () => {
      const { data: orders } = await axios.get("http://localhost:3001/order")

      setNewOrder(orders)

    }

    fetchOrders()
  }, [])

  const deleteOrder = async (orderId) => {
    await axios.delete(`http://localhost:3001/order/${orderId}`)
    const newOrders = newOrder.filter(order => order.id !== orderId)

    setNewOrder(newOrders)
  }

  const numberOfOrders =  () => {
    const number = newOrder.length
    if (number === 0) {
      return <NumberOrders>Nenhum Pedido</NumberOrders>
    } else if (number === 1) {
      return <NumberOrders>{newOrder.length} Pedido</NumberOrders>
    } else {
      return <NumberOrders>{newOrder.length} Pedidos</NumberOrders>
    }
  }

  return (
    <Container>
      <Image src={ImageOrder} alt="Imagem Inicial" />

      <ContainerItens>
        <H1>Pedidos</H1>

        {numberOfOrders()}

        {newOrder.map(order => (
          <DataOrder key={order.id}>
            <Data>
              <NameOrder>
                {order.order}
              </NameOrder>
              <Name>
                {order.clientName}
              </Name>
            </Data>
            <button onClick={() => deleteOrder(order.id)}>
              <img src={TrashImage} alt="Deletar Pedido" />
            </button>
          </DataOrder>
        ))}

        <Button onClick={goBackPage}>Voltar</Button>
      </ContainerItens>

    </Container>
  )
}

export default Orders