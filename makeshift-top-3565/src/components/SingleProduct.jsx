import React, { useEffect, useState } from 'react'
import '../App.css'
import axios from 'axios';
const SingleProduct = () => {
    const [singleProduct,setSingleProduct] =useState([]);
    const [quantity,setQuantity] =useState(1);
    let id=1;

    let num = Number(singleProduct.price)/250;
    num = (num.toFixed(2));


    const getSingleProduct=()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((res)=>setSingleProduct(res.data))
    }
    
useEffect(()=>{
    getSingleProduct();
},[])

const handleChange=(e)=>{

setQuantity(e.target.value);

}

  return (
    <div style={{display:"flex", gap:"20px"}}>
        <div>
      <img className='singleProductImage' style={{width:"200px", height:"300px"}} src={singleProduct.image} alt="" />  
      </div>
      <div style={{textAlign:"left"}}>
      <button>Fresho</button>
      <p style={{fontSize:"22px"}}>{singleProduct.title}</p>
      <h3>Price: Rs {singleProduct.price} <span style={{fontWeight:"normal"}}> (Rs {num}/g)</span></h3>
      <p style={{color:"red"}}>You Save {Math.round(Number(Math.random()*40))}%</p>
        <p>Inclusive of all taxes</p>
        <div style={{display:"flex", gap:"10px", marginBottom:"10px"}}>
        <input style={{width:"20px", padding:"4px"}} type="text" onChange={(e)=>handleChange(e)} value={quantity}></input>
        <button style={{padding:"10px", color:"white", fontWeight:"bold", backgroundColor:"greenyellow", border:"none"}}>ADD TO BASKET</button>
        </div>
        <button style={{padding:"10px", width:"100px"}}>SAVE</button>
    </div>
    </div>
  )
}

export default SingleProduct
