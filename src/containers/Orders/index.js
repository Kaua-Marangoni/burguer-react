import axios from "axios"
import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import SyncLoader from "react-spinners/SyncLoader"
import { toast } from "react-toastify"

import ImageOrder from "../../assets/image-order.svg"
import TrashImage from "../../assets/trash.svg"
import OrderLoading from "../../Components/OrderLoading"
import {
  Container,
  Image,
  ContainerItens,
  H1,
  NumberOrders,
  DataOrder,
  Data,
  NameOrder,
  Name,
  Loading,
  Button
} from "./styles"

const Orders = () => {
  const [loading, setLoading] = useState(false)
  const [skeletonLoading, setSkeletonLoading] = useState(false)

  const [newOrder, setNewOrder] = useState([])

  const history = useHistory()

  const goBackPage = () => {
    history.push("/")
  }

  useEffect(() => {
    const fetchOrders = async () => {
      setSkeletonLoading(true)

      const { data: orders } = await axios.get(
        "https://burguer-backend.herokuapp.com/order"
      )

      setNewOrder(orders)
      setSkeletonLoading(false)
    }

    fetchOrders()
  }, [])

  const deleteOrder = async orderId => {
    setLoading(true)

    await axios.delete(`https://burguer-backend.herokuapp.com/order/${orderId}`)
    const newOrders = newOrder.filter(order => order.id !== orderId)

    setNewOrder(newOrders)
    toast.success("Pedido deletado")
    setLoading(false)
  }

  const numberOfOrders = () => {
    const number = newOrder.length
    if (!skeletonLoading) {
      if (number === 0) {
        return <NumberOrders>Nenhum Pedido</NumberOrders>
      } else if (number === 1) {
        return <NumberOrders>{newOrder.length} Pedido</NumberOrders>
      } else {
        return <NumberOrders>{newOrder.length} Pedidos</NumberOrders>
      }
    } else {
      return <NumberOrders>N° Pedidos</NumberOrders>
    }
  }

  return (
    <Container>
      <Image src={ImageOrder} alt="Imagem Inicial" />

      <H1>Pedidos</H1>

      {numberOfOrders()}

      {skeletonLoading && (
        <>
          <OrderLoading />
          <OrderLoading />
          <OrderLoading />
          <OrderLoading />
          <OrderLoading />
        </>
      )}

      <Loading>
        {loading && (
          <SyncLoader color={"#e67e22"} loading={loading} size={20} />
        )}
      </Loading>

      <ContainerItens>
        {newOrder.map(order => (
          <DataOrder key={order.id}>
            <Data>
              <NameOrder>{order.order}</NameOrder>
              <Name>{order.clientName}</Name>
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
