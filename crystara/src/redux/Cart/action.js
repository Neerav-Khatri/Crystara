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

export const GetPin=(payload)=>{
    return {
        type:types.Pin,
        payload
    }
}
export const Getwish=(payload)=>{
    return {
        type:types.wishlist,
        payload
    }
}


