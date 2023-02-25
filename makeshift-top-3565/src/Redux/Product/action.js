import * as types from "./actiontype"
import axios from "axios"



const Collection=(cat)=>(dispatch)=> {
 
dispatch({type:types.GET_Collection_REQUEST})
  
return axios.get(`http://localhost:3000/${cat}`)
  .then((r) => {
      dispatch({type:types.GET_Collection_SUCCESS, payload:r.data})
      console.log(r)
      
  })
  .catch((e) =>{dispatch({type: types.GET_Collection_FAILURE})
      console.log(e) 
    })

  
}


const sort=(cat,order)=>(dispatch)=> {
 
  dispatch({type:types.GET_Collection_REQUEST})
    
  return axios.get(`http://localhost:3000/${cat}?_sort=price&_order=${order}`)
    .then((r) => {
        dispatch({type:types.GET_Collection_SUCCESS, payload:r.data})
        console.log(r)
        
    })
    .catch((e) =>{dispatch({type: types.GET_Collection_FAILURE})
        console.log(e) 
      })
  
    
  }
export {Collection,sort}