import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { PokeApp } from './PokeApp'
import './styles.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <PokeApp />
    </React.StrictMode>
  </BrowserRouter>,
    
)
