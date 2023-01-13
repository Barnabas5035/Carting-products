import React from 'react'
import Home from './Home'
import Cart from './component/Cart'
import Navbar from './component/Navbar'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />

        <Route path='/Cart' element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
