import React from 'react'
import SingleProductPage from '@/components/singleproductAman'
import axios from "axios"

const Singleproduct = ({data}) => {
  console.log(data)

   const Post =()=>{
      axios.post(`https://naughty-frog-cummerbund.cyclic.app/cart`,{data})
      .then((res)=>console.log(res))
      .catch((err)=>console.log("error"))
   }

  return (
    <>
        {
           <SingleProductPage {...data}  Post={Post}      />
        }
    </>
  )
}

export default Singleproduct





export async function getStaticPaths(){
  let res = await fetch(`https://naughty-frog-cummerbund.cyclic.app/arrival`)
  let data = await res.json()

  return{
    paths: data.map((el)=>(
         {params: {id:el.id.toString()} }
    )),
    fallback:false,

  }

}


export async function getStaticProps(context){
   let {params: {id}} = context
  let res = await fetch(`https://naughty-frog-cummerbund.cyclic.app/arrival/${id}`)
  let data = await res.json()

  return{  props:{data} }

}
