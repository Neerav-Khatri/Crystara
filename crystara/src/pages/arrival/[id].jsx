import React from 'react'
import SingleProductPage from '@/components/singleproductAman'
import axios from "axios"
import Description from '@/components/description'
import Footer from '@/components/Footer'
import Head from 'next/head'
import Navbar from '@/components/Navbar'

const Singleproduct = ({data}) => {
  console.log(data)

   const Post =()=>{
      axios
        .post(`http://localhost:8080/cart`, data)
        .then((res) => console.log(res))
        .catch((err) => console.log("error"));
   }

  return (
    <>
       <Navbar />
        
        {
           <SingleProductPage {...data}  Post={Post}      />
        }

        <Description />
        <Footer />


    </>
  )
}

export default Singleproduct





export async function getStaticPaths(){
  let res = await fetch(`http://localhost:8080/arrival`);
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
  let res = await fetch(
    `http://localhost:8080/arrival/${id}`
  );
  let data = await res.json()

  return{  props:{data} }

}
