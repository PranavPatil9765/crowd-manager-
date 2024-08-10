import React from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Product from './pages/Product'
import Home from './pages/Home'
import Scan from './pages/Scan'
import Navbar from './components/navbar.jsx'
const App = () => {
  return <>
  
      <Navbar/>

      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/:product' element = {<Product/>} />
        <Route path='/scan' element = {<Scan/>} />
      </Routes>
  
  </>
}

export default App