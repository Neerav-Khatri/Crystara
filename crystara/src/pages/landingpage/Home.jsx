
import React from 'react'
import Card from './Card'
import Card_2 from './Card_2'
import Carousel from './Carousel'
import Middle from './Middle'

// this is the landing page 
const Home = () => {
  return (
    <div>
      <Carousel/>
      <Card/>
      <Middle/>
      <Card_2/>
    </div>
  )
}

export default Home
