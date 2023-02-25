import { Box } from '@chakra-ui/react'
import React from 'react'
import {Routes,Route} from "react-router-dom"
// 
import Product from '../components/Product'

const MainRouter = () => {
  
  return (
    <Box mt="5%" >
        <Routes>
            
           
            <Route path="/product/:title" element={<Product/>}/>
            

        </Routes>
    </Box>
  )
}

export default MainRouter