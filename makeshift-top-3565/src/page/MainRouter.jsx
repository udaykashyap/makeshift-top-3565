
import React from 'react'
import {Routes,Route} from "react-router-dom"
import CheckoutPage from '../components/CheckoutPage'
import Home from '../components/Home'
import Login from '../components/Login'
import Product from '../components/Product'
import Signup from '../components/Signup'


const MainRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/checkout" element={<CheckoutPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path="/product" element={<Product/>}/>
      </Routes>
  )
}

export default MainRouter