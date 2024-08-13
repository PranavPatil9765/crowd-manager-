import React from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Product from './pages/Product'
import Home from './pages/Home'
import Scan from './pages/Scan'
import Login from './pages/Login.jsx'
const App = () => {
  return <>
  
      

      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/:product' element = {<Product/>} />
        <Route path='/scan' element = {<Scan/>} />
        <Route path='/Login' element = {<Login/>} />
      </Routes>
  
  </>
}

export default App