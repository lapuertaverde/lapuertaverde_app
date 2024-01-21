import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './pages/Inicio/Inicio.jsx'
import Escritorio from './pages/Escritorio/Escritorio.jsx'
import RoutesGuardian from './utils/RoutesGuardian.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Inicio />} />
          <Route element={<RoutesGuardian />}>
            <Route path="escritorio" element={<Escritorio />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
