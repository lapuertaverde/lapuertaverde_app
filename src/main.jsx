import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './pages/Inicio/Inicio.jsx'
import Escritorio from './pages/Escritorio/Escritorio.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Inicio />} />
          <Route path="escritorio" element={<Escritorio />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
