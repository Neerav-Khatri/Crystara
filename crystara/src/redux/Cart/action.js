import * as types from "./actionTypes"

export const Postdata=(payload)=>{
    return{
        type:types.POST_CART,
        payload
    }
}

export const Getdata=()=>{
    return{
        type:types.GET_CART,
    }
}

export const Deldata=()=>{
    return{
        type:types.DEL_CART
    }
}