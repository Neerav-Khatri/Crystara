import React from 'react'
import Head from 'next/head'
import styles from "../styles/cart.module.css"
import Image from 'next/image'
import {CiPercent} from "react-icons/ci"
import {BsTruck} from "react-icons/bs"
import {FaLock} from "react-icons/fa"
import axios from "axios"
import { useDispatch,useSelector } from 'react-redux'
import { TotalpriceFound,TotalsavingFound,TotalItemFound,GetCart,del } from '@/redux/Cart/action'



const Cart = ({data}) => {

   const dispatch = useDispatch()

  const {Price ,Saving, Item,cart} = useSelector((state)=>{
   return{
         Price : state.cartReducer.Price,
         Saving: state.cartReducer.Saving,
         Item:   state.cartReducer.Item,
         cart:   state.cartReducer.cart
   }
  })

   const totalitem = data.length

   const ref = React.useRef([])
 
   const [sum,setsum]= React.useState(0)
   const [discount,setdiscount] = React.useState(0)

   React.useEffect(()=>{
       let sum1=0
       let sum2=0
       for(let i=0;i<data.length;i++){
        sum1+= data[i].data.currentPrice*ref.current[i].value
        if(data[i].data.originalPrice!=''){
           sum2+= (Number(data[i].data.originalPrice)-Number(data[i].data.currentPrice))*ref.current[i].value
        }
       } 
         setsum(sum1)
         dispatch(TotalpriceFound(sum1))
         setdiscount(sum2)
         dispatch(TotalsavingFound(sum2))
         dispatch(TotalItemFound(totalitem))
         dispatch(GetCart(data))
   },[])
   
   const handlechange=()=>{
    let sum1=0
    let sum2=0
    for(let i=0;i<data.length;i++){
     sum1+= data[i].data.currentPrice*ref.current[i].value
    
    if(data[i].data.originalPrice!=''){
      sum2+= (Number(data[i].data.originalPrice)-Number(data[i].data.currentPrice))*ref.current[i].value
   }
  }
      setsum(sum1)
      dispatch(TotalpriceFound(sum1))
      setdiscount(sum2)
      dispatch(TotalsavingFound(sum2))
      dispatch(TotalItemFound(totalitem))
   }
    
   // console.log(sum,discount)
     
  //  const Getagain=()=>{
  //   axios.get(`http://localhost:8080/cart`)
  //   .then((res)=>dispatch(GetCart(res.data)))
  //   .catch((err)=>console.log("error"))
  //  }

      const delfun=(id)=>{
          dispatch(del(id))
          console.log(id)
         
      }
 
      console.log(cart)

   return (
    <>
     <Head>
        <title> cart page </title>
     </Head>
    
      <div className={styles.cartmainDiv}  >

        <div className={styles.cartdiv1} >

           <div className={styles.pointDiv}  >
             <p className={styles.P13}  > Get ₹ 12671 xCLusive points on this order.</p>
             <p className={styles.P14}  >You can redeem these points on your next order</p>
             <p className={styles.P14}  >( 1 Point = 1 rupee ) <span className={styles.know} > Know More </span> </p>
           </div>
            
            <p className={styles.P15}  > {`Total (${totalitem} Items) : ₹ ${sum}`} </p>


             {


               data.map((el,i)=>{

                return <div className={styles.singleCart} key={el.id} >
                        <div className={styles.singleCart1} >
                           <Image src={el.data.src1} width={250} height={550} alt="pic"  />
                        </div>
                       <div className={styles.singleCart2} >
                        <p className={styles.P14} > {el.data.name}</p>
                        <p className={styles.P16}  >UT00702-1Y0000</p>
                        <p className={styles.P17} >Quantity : 
                        <select className={styles.select} ref={(ele)=> {ref.current[i]=ele}} onClick={()=>handlechange(i)}   > 
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                         </select>  </p>
                           
                         <p className={styles.P18} >Delivery by - Tomorrow</p>
                         <p> <span  className={styles.span1} >₹{~~el.data.currentPrice}</span>  <span className={styles.span2} >₹{~~el.data.originalPrice}</span>    <span className={styles.span3} >Save ₹{(~~el.data.originalPrice)-(~~el.data.currentPrice)}</span>   </p>
                     </div>
                   <div className={styles.singleCart3} >
                    <button className={styles.removeBtn} onClick={()=>delfun(i+1)} > Remove</button>
                    <button className={styles.wishListBtn}  > Move to Wishlist</button>
                  </div>
                </div>

               })

             }


        </div>

        <div className={styles.cartdiv2} >

          <div className={styles.coupondiv} > 
            <p  className={styles.P19} > <CiPercent className={styles.percentIcon}  />  Apply Coupon <span className={styles.available}  > - 2 Available</span>  </p>
          </div>
          
          <div className={styles.coupondiv2} > 
            <p  className={styles.P19} > <BsTruck className={styles.percentIcon2}  /> <span  className={styles.available2} >Deliver to </span>  - 229021  </p>
          </div>
         
          <p className={styles.P20} >Order Summary</p>
      
          <div className={styles.orderdiv} >
              <div className={styles.orderdiv1} >
                <div className={styles.orderInsideDiv1} >Subtotal</div>
                <div   >₹ 48956</div>
              </div>

              <div className={styles.orderdiv1} >
                <div className={styles.orderInsideDiv1} >You Saved</div>
                <div className={styles.orderInsideDiv2}  >- ₹ {discount}</div>
              </div>

              <div className={styles.orderdiv1} >
                <div className={styles.orderInsideDiv1} >Coupon Discount</div>
                <div className={styles.orderInsideDiv3}  >Apply Coupon</div>
              </div>

              <div className={styles.orderdiv1} >
                <div className={styles.orderInsideDiv1} >Delivery Charge (Standard)</div>
                <div className={styles.orderInsideDiv2}  >FREE</div>
              </div>

              <div className={styles.orderdiv1} >
                <div className={styles.orderInsideDiv5} >TOTAL COST</div>
                <div className={styles.orderInsideDiv5}  >₹ {sum}</div>
              </div>
          </div>
            
            <button className={styles.checkout} > <FaLock className={styles.lockIcon2} /> Checkout Securely</button>

        </div>
              

      </div>

    </>
  )
}


export async function getServerSideProps(){
  
  let res = await fetch(`http://localhost:8080/cart`)
  let data = await res.json()

  return {  props: {data} }

}


export default Cart