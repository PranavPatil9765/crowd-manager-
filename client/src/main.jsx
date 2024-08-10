import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { CardProvider } from './contextapi/context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <BrowserRouter>
   <CardProvider>


    <App />
   </CardProvider>
    </BrowserRouter>
   
  </React.StrictMode>,
)
