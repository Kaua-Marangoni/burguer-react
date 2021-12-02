import React from "react"
import ReactDOM from "react-dom"
import { ToastContainer } from "react-toastify"

import Routes from "./routes"
import GlobalStyle from "./styles/globalStyle"

ReactDOM.render(
  <>
    <Routes />
    <ToastContainer autoClose={2500} theme="colored" />
    <GlobalStyle />
  </>,
  document.getElementById("root")
)
