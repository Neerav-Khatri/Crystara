import React from 'react'
import axios from "axios"
import styles from "../styles/wishList.module.css"
import Image from 'next/image'
import {RxCross1} from "react-icons/rx"
import { useRouter } from 'next/router'
import Footer from '@/components/Footer'
import { useDispatch } from 'react-redux'
import { Getwish } from '@/redux/Cart/action'

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
        axios.get(`http://localhost:8080/wishlist`)
       .then((res)=>{setwishlistdata(res.data)
              })
       .catch((err)=>console.log("error"))
   }

 // console.log(wishlistdata)
  const del=(id)=>{
    axios.delete(`http://localhost:8080/wishlist/${id}`)
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

  axios.post(`http://localhost:8080/cart`,data)
  .then((res)=>console.log(res))
  .catch((err)=>console.log("error"))
   delfun(id)
  router.push("/cart")
  dispatch(Getwish(wishlistLength))
}


  return (
    <>
    <div className={styles.div} >Your WishList</div>
     <div  className={styles.container} >

        {

            wishlistdata.map((el)=>{

                return   <div key={el.id} className={styles.cardname} >
                              <RxCross1 className={styles.crossIcon}  onClick={()=>delfun(el.id)} />
                           <Image className={styles.img1} height={50} width={150} src={el.src1} alt="pic" />
                            <p className={styles.P23} > {el.name} </p>
                            <div className={styles.cartPdiv}  >
                            <p className={styles.P22} > ₹{el.currentPrice} </p>
                            <button className={styles.btn5} onClick={()=>cartPost(el.id)} >Move to Cart</button>
                         </div>
               
    
            </div>

                  


            })
        }

      
        
     </div>

     <Footer />
    
    
    </>
  )
}

export default WishList