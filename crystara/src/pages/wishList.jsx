
import React from 'react'
import axios from "axios"
import styles from "../styles/wishList.module.css"
import Image from 'next/image'
import {RxCross1} from "react-icons/rx"
import { useRouter } from 'next/router'
import Footer from '@/components/Footer'
import { useDispatch } from 'react-redux'
import { Getwish } from '@/redux/Cart/action'
import Navbar from '@/components/Navbar'
import { Flex, Grid, GridItem } from '@chakra-ui/react'
const WishList = () => {

    const[wishlistdata,setwishlistdata] = React.useState([])
    

    const router = useRouter()
    const dispatch = useDispatch()
    const wishlistLength = wishlistdata.length
    React.useEffect(()=>{
       getwishlist()
       dispatch(Getwish(wishlistLength))
    },[])

    const getwishlist=()=>{
        axios.get(`https://mock-server-crystara.onrender.com/wishlist`)
       .then((res)=>{setwishlistdata(res.data)
              })
       .catch((err)=>console.log("error"))
   }

 // console.log(wishlistdata)
  const del=(id)=>{
    axios.delete(`https://mock-server-crystara.onrender.com/wishlist/${id}`)
   .then((res)=>  getwishlist() )
   .catch((err)=>console.log("error"))
 }
 const delfun=(id)=>{
  del(id)
  dispatch(Getwish(wishlistLength))
}

  const cartPost=(id)=>{
    let dummy = wishlistdata.filter((el)=>{
        return el.id==id
    })
    console.log(dummy[0])
    let data = dummy[0]

  axios.post(`https://mock-server-crystara.onrender.com/cart`,data)
  .then((res)=>console.log(res))
  .catch((err)=>console.log("error"))
   delfun(id)
  router.push("/cart")
  dispatch(Getwish(wishlistLength))
}


  return (
    <>
    <Navbar />
    <Flex className={styles.div} justifyContent={'center'} alignItems={'center'} fontWeight={700} >Your WishList</Flex>
     <Grid  className={styles.container}   templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}  
             gap={4} p={4}  placeContent={'center'} >

        {

            wishlistdata.map((el)=>{

                return   <GridItem key={el.id} className={styles.cardname}  w='90%'  >
                              <RxCross1 className={styles.crossIcon}  onClick={()=>delfun(el.id)} />
                           <Image className={styles.img1} height={50} width={150} src={el.src1} alt="pic" />
                            <p className={styles.P23} > {el.name} </p>
                            <GridItem className={styles.cartPdiv}  >
                            <p className={styles.P22} > ₹{el.currentPrice} </p>
                            <button className={styles.btn5} onClick={()=>cartPost(el.id)} >Move to Cart</button>
                         </GridItem>
               
    
            </GridItem>

                  


            })
        }

      
        
     </Grid>

     <Footer />
    
    
    </>
  )
}

export default WishList

