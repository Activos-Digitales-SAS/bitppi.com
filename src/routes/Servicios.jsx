import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Servicios from '../components/Servicios/Servicios'
import HeroImage from '../components/HeroImage/HeroImage'




const Pricing = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading='Servicios' text='Elige que transaccion realizaras' />
      <Servicios />
      <Footer />
    </div>
  )
}

export default Pricing