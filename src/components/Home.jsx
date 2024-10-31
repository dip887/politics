import React from 'react'
import Navbar from './Navbar'
import Carousel from '../subComponents/home/Section1'
import NewsSection from '../subComponents/home/Section2'
import CardSection from '../subComponents/home/Section3'
import NewsSlider from '../subComponents/home/Section4'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
        {/* <Navbar /> */}
        <Carousel />
        <NewsSection />
        <CardSection />
        <NewsSlider />
        {/* <Footer /> */}
    </div>
  )
}

export default Home