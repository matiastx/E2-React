import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Benefis from '../../Components/Benefits/Benefis'
import Crypto from '../../Components/Crypto/Crypto'
import AboutUs from '../../Components/AboutUs/AboutUs'
import Contact from '../../Components/Contact/Contact'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <>
      <Hero/>
      <Benefis/>
      <Crypto/>
      <AboutUs/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home