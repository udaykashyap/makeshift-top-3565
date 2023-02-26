import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Image,Text,Button, HStack, Heading} from '@chakra-ui/react'
const Product = () => {

        const [data,setData]=useState([]);
    const [error,setError]=useState(false);
    // const handleGetId=(id)=>{
    //     console.log(id)
    //     localStorage.setItem('identity',JSON.stringify(id))
    // }
    const getData=()=>{
        axios.get('http://localhost:3000/all_products')
        .then((res)=>{
            setData(res.data)
            console.log(res.data);
        })
        .catch((err)=>{
            console.log(err);
            setError(true);
                    })
    }
useEffect(()=>{
    getData();
},[]);

if(error){
    return <h2>SomeThing went Wrong....</h2>
}
  return (
    <div style={{width:"80%", marginTop:"180px", display:"grid", gridTemplateColumns:"repeat(4,300px)", gap:"10px", justifyContent:"center", alignItems:"center",  margin:"auto"}}>
      {
        data.map((el)=>(
            <div onClick={(el)=>{console.log(el.id)}} style={{ margin:"auto",boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", padding:"40px"}}>
            <Image w="200px" h="200px" src={el.image}></Image>
            <Text color="black.300">{el.brand}</Text>
             <Heading as='h5' size='sm'>{el.title}</Heading>   
             <Text>₹ {el.price} <span style={{textDecoration:"line-through", color:"gray"}}>₹{Math.round(el.price*1.5)}</span></Text>
             <HStack justifyContent="space-between" mt="60px">
             <Button border="1px solid black" bgColor="white"><Image w="100%" h="22px" src='https://cdn-icons-png.flaticon.com/128/5662/5662990.png'/></Button>
             <Button border='1px solid red' bgColor="white" w="75%">Add</Button>
             </HStack>
            </div>
        ))
      }
    </div>
  )
}

export default Product
