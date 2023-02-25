import Footer from './components/Footer'
import Navbar from './components/Navbar'
import React from 'react'
import CheckoutPage from './components/CheckoutPage'
import MainRouter from './page/MainRouter'

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRouter/>
      <CheckoutPage />
      <Footer />
    </div>
  )
}

export default App