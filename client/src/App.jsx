import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Scan from './pages/Scan'
import Navbar from './components/navbar.jsx'
const App = () => {
  return <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/scan' element = {<Scan/>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App