

import React from 'react'
import styles from "../styles/demo.module.css"
import Head from 'next/head'
import {AiFillStar} from "react-icons/ai"
import {IoMdHeartEmpty } from "react-icons/Io"
import {GoLocation} from "react-icons/go"
import {BsBag,BsFillHandbagFill,BsArrowRight,BsApple} from "react-icons/bs"
import {FaVideo,FaWeight,FaGooglePlay} from "react-icons/fa"
import {HiHome} from "react-icons/hi"
import {RxDimensions} from "react-icons/rx"
import {SiPurescript} from "react-icons/si"
import {SlDiamond} from "react-icons/sl"
import Image from 'next/image'
import { useRef } from 'react'
import {useRouter} from 'next/router'
import { useDispatch,useSelector } from 'react-redux'
import { GetPin } from '@/redux/Cart/action'





const SingleProductPage = ({src1,src2,src3,video,originalPrice,currentPrice,name,material,Post}) => {

  const dispatch = useDispatch()
  const Pincode = useSelector((state)=>state.cartReducer.Pincode)
  console.log(Pincode)

  const [pin,setpin] = React.useState('')

  const handlechange=(e)=>{
    setpin(e.target.value)
   
  }
 

  const router = useRouter() 
  const arr = [src1,src2,src3]

  const handleAdd=()=>{
     Post()
     dispatch(GetPin(pin))
     router.push("/cart")
  }
    
   const ref = useRef(null)


   const next =()=>{
      let width = ref.current.clientWidth
      ref.current.scrollLeft = ref.current.scrollLeft - width
   }
   const prev =()=>{
      let width = ref.current.clientWidth
      ref.current.scrollLeft = ref.current.scrollLeft + width
   }
 


  return (
    <>

     <Head>
        <title> SingleRingsPage page </title>
     </Head>



  <div className={styles.maindiv} >
     
       <div className={styles.maindiv1}>
             
        <div className={styles.carouselDiv} ref={ref} > 
           <button  className={styles.preBtn}  onClick={next} > <p>&lt;</p> </button>
           <button  className={styles.nextBtn}  onClick={prev} > <p>&gt;</p> </button> 
           {
              arr.map((el,i)=>{
               return<Image key={i} src={el} width={500} height={400} alt="pic" className={styles.img} />
              })
     
           }
                <video controls>
                  <source src={video} type="video/mp4"  />
                </video>

        </div>


       </div>


    <div className={styles.maindiv2}>

          <div className={styles.stardiv} >
            4.2 <AiFillStar  className={styles.star} />   <div>3 REVIEWS </div> 
          </div>


       <div className={styles.namediv} >
         <div className={styles.name} >
          {name}
           <p>{ `Set in 14 KT Rose Gold(3.580 g) with ${material} (0.310 ct ,IJ-SI)`}</p>
         </div> 

         <div className={styles.wishlisticon} >
            <IoMdHeartEmpty className={styles.hearticon} />
         </div>

       </div>
        
       
       <div className={styles.deliveryPtag} >
        <div>Delivery & Store Details</div>
        <div  className={styles.locationP}  >Locate Me</div>
       </div>

       <div className={styles.inputdiv} >
        <input type="text"  className={styles.input} value={pin} onChange={handlechange}  />
        <GoLocation  className={styles.locationIcon} />
       </div>


       <div className={styles.belowInput} >
         <div className={styles.belowInput1} >
           <BsBag  className={styles.bagIcon} />
         </div>
         <div className={styles.belowInput2} >
          <p className={styles.P1} >Free Delivery In 2 days</p>
          <p className={styles.P2}  >Order in next 16 Hrs 37 Mins T&C</p>
         </div>
       </div>

        <div   className={styles.Pricediv} >
           <div className={styles.Pricediv1} >₹{currentPrice} </div>
           {
           originalPrice!=''?
           <div className={styles.Pricediv2} >₹ {originalPrice}</div> : <div className={styles.Pricediv2} ></div>
          }
        
        </div>

        <div className={styles.cartdiv} onClick={handleAdd} >
           <BsFillHandbagFill  className={styles.cartIcon}   />  ADD TO CART
        </div>
        
        <div className={styles.contactdiv} >

           <div className={styles.Videocall} >
              <div className={styles.VideocallInsidediv} >
                <div className={styles.VideocallInsidediv1}  > <FaVideo className={styles.videoIcon} /> </div>
                <div  className={styles.VideocallInsidediv2} >
                  <p  className={styles.P3} >Want a closer look?</p>
                  <p className={styles.P4}  >Get on a live video call with our design consultants.</p>
                </div>
              </div>
             <button className={styles.btn} >Schedule a Video Call</button>
           </div>

           <div className={styles.Videocall} >
              <div className={styles.VideocallInsidediv} >
                <div className={styles.bookmeetingInsidediv}  > <HiHome className={styles.homeIcon} /> </div>
                <div  className={styles.VideocallInsidediv2} >
                  <p  className={styles.P3} >Try it on at home</p>
                  <p className={styles.P4}  >Home Appointment Available to try from today.</p>
                </div>
              </div>
             <button className={styles.btn2} >Schedule a Video Call</button>
           </div>
         
        </div>


        </div>
     </div>
     {/* <-------------------------------------product details-----------------------------------------------------------> */}


         <div className={styles.productmaindiv}  >

            <div className={styles.productdiv1}  >
              <div className={styles.Ptagdiv}  >
                <p className={styles.P5}  >Product Details</p>
                <p className={styles.P6}  >{`Set in 14 KT Rose Gold(3.580 g) with diamonds (0.310 ct ,IJ-SI)`}</p>
              </div>

              <div className={styles.productdetail}  >
                <div className={styles.dimension}  >
                  <p className={styles.P7} ><RxDimensions className={styles.dimensionIcon}  /> Dimensions </p>
                  <p className={styles.P8}  >Length - 43.18cm (17 inches)</p>
                  <p className={styles.P8}  >Height - 17.9 mm</p>
                </div>
                <div className={styles.dimension}  >
                  <p className={styles.P7} ><FaWeight className={styles.dimensionIcon}  /> Weight </p>
                  <p className={styles.P8}  >Gross 3.642 g</p>
                </div>
                <div className={styles.dimension}  >
                  <p className={styles.P7} ><SiPurescript className={styles.dimensionIcon}  /> Purity </p>
                  <p className={styles.P8}  > 14 KT </p>
                </div>
              </div>
            </div>


            <div className={styles.productdiv2}  >
               <div className={styles.productDiamonddiv} > <SlDiamond className={styles.diamondIcon} /> DIAMOND & GEMSTONES </div>
               <div className={styles.productdiv2inside} >
                 <div className={styles.productdiv2inside1} >
                   <p className={styles.P9} >Diamond Type</p>
                   <p className={styles.P10} >IJ-SI</p>
                 </div>
                 <div className={styles.productdiv2inside1} >
                   <p className={styles.P9} >Setting Type</p>
                   <p className={styles.P10} >Mico Prongs</p>
                 </div>
                 <div className={styles.productdiv2inside1} >
                   <p className={styles.P9} >Total Number</p>
                   <p className={styles.P10} >	33</p>
                 </div>
                 <div className={styles.productdiv2inside1} >
                   <p className={styles.P9} >Total Weight</p>
                   <p className={styles.P10} >	0.310 ct</p>
                 </div>
          
               </div>
            </div>

         </div>

 {/* <-------------------------------------------------------------------------------------------> */}
         

      <div className={styles.cardDiv} >
        <div className={styles.cardDiv1} >
           <div className={styles.cardDiv1Inside1} >
            <p className={styles.P11} >Complete Profile And Earn 250</p>
            <p className={styles.P12} >You can now redeem xClusive point on all your orders</p>
           </div>
           <div className={styles.cardDiv1Inside2} >
                <BsArrowRight className={styles.arrowIcon} />
           </div>
        </div>
        
        <div className={styles.cardDiv1} id={styles.cardDiv2} >
           <div className={styles.cardDiv1Inside1} >
            <p className={styles.P11} >Download a CaratLane APP</p>
            <p className={styles.P12} >shop and save more on app by redeem xClusive point on all your orders</p>
           </div>
           <div className={styles.cardDiv1Inside2} >
                <div className={styles.appleIconDiv} >
                  <BsApple /> ios
                </div>
                <div className={styles.appleIconDiv} id={styles.appleIconDiv2}  >
                  <FaGooglePlay /> android
                </div>
           </div>
        </div>
      </div>
          
 
     </>
  )
}



export default SingleProductPage