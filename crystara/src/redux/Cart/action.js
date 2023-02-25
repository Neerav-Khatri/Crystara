import * as types from "./actionTypes"
import axios from "axios"

export const TotalpriceFound=(payload)=>{
    return{
        type:types.TotalPrice,
        payload
    }
}

export const TotalsavingFound=(payload)=>{
    return{
        type:types.TotalSaving,
        payload
    }
}
export const TotalItemFound=(payload)=>{
    return{
        type:types.TotalItem,
        payload
    }
}
export const GetCart=(payload)=>{
    return{
        type:types.Get,
        payload
    }
}

export const Deldata=()=>{
    return{
        type:types.DEL_CART
    }
}



export const del=(id)=>async(dispatch)=>{
    await axios.delete(`http://localhost:8080/cart/${id}`)
    .then((res)=> dispatch(GetCart(res.data)))
    .catch((err)=>console.log("error"))
  }
