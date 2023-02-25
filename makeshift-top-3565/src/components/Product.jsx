import { Grid, Select } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Collection, sort } from '../Redux/Product/action'
import Productcard from '../page/Productcard'
const Product = () => {
    const {title}=useParams()
    const dispatch=useDispatch()
    const [cat,setcat]=useState("asc")
    const data=useSelector((state)=>state.collection.data)
    console.log(data)
    useEffect(()=>{
        dispatch(Collection(title))
        dispatch(sort(title,cat))

    },[title,dispatch,cat])
    console.log(title)


    return (
    <div>
    <Select m="auto" w="15%" placeholder='Price sort' onChange={(e)=>setcat(e.target.value)}>
    <option value='asc'>Price low to high</option>
    <option value='desc'>Price high to low</option>
    </Select>

    <Grid gridTemplateColumns={"repeat(4,1fr)"}>
    {
        data && data.map((el)=>{
            return(
                <>
                <Productcard el={el}/>

                </>
            )
        })
    }
    </Grid>
    </div>
  )
}

export default Product