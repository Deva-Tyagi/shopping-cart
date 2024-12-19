import { useState } from 'react'
import './App.css'
import Product from './components/Product/Product'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Cart from './components/Cart/Cart'

function App() {
  const [addCart, setAddCart] = useState([])

  return (
    <>
    <BrowserRouter>
    <Navbar addCart = {addCart}/>
    <Routes>
      <Route path='/' element={<Product addCart = {addCart} setAddCart = {setAddCart}/>}/>
      <Route path='/cart' element={<Cart addCart = {addCart} setAddCart = {setAddCart}/>}/>
    </Routes>
    </BrowserRouter>
     
    
    </>
  )
}

export default App
