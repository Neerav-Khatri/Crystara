import React from 'react'
import Head from 'next/head'
import styles from "../styles/cart.module.css"
import Image from 'next/image'
import {CiPercent} from "react-icons/ci"
import {BsTruck} from "react-icons/bs"
import {FaLock} from "react-icons/fa"
import axios from "axios"

const Cart = ({data}) => {
  
  console.log(data)
 

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
            
            <p className={styles.P15}  > {`Total (9 Items) : ₹4,22,368`} </p>


             {


               data.map((el)=>{

                return <div className={styles.singleCart} >
                        <div className={styles.singleCart1} >
                           <Image src={el.data.src1} width={250} height={550} alt="pic"  />
                        </div>
                       <div className={styles.singleCart2} >
                        <p className={styles.P16}  >{el.name}</p>
                        <p className={styles.P16}  >UT00702-1Y0000</p>
                        <p className={styles.P17} >Quantity : 
                        <select className={styles.select}  > 
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
                    <button className={styles.removeBtn} > Remove</button>
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
                <div className={styles.orderInsideDiv2}  >- ₹ 899</div>
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
                <div className={styles.orderInsideDiv5}  >₹ 87855</div>
              </div>
          </div>
            
            <button className={styles.checkout} > <FaLock className={styles.lockIcon2} /> Checkout Securely</button>

        </div>
              

      </div>

    </>
  )
}


export async function getServerSideProps(){
  
  let res = await fetch(`https://naughty-frog-cummerbund.cyclic.app/cart`)
  let data = await res.json()

  return {  props: {data} }

}









export default Cart