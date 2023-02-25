import { Button, Menu, MenuButton, MenuItem, MenuList, Select } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import {ChevronDownIcon} from "@chakra-ui/icons"

const Dropdown = () => {
    const [cat,setcat]=useState("")
    const navigate=useNavigate()
    useEffect(()=>{
        navigate(`/product/${cat}`)
    },[cat])
    console.log(cat)
  return (
    <div>
<Select m="auto" w="15%" placeholder='Shop' onChange={(e)=>setcat(e.target.value)}>
    <option value='all_products'>All products</option>
  <option value='fruits-vegetables'>fruits-vegetables</option>
  <option value='foodgrains-oil-'>Foodgrains,Oil & Masala</option>
  <option value='eggs-meat-fish'>Egg,Meat & Fish</option>
  <option value="">Bakery, Cakes & Dairy</option>
    <option value="">Beverage</option>
</Select>
    </div>
  )
}


export default Dropdown