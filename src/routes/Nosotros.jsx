import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import HeroImage from '../components/HeroImage/HeroImage'
import Footer from '../components/Footer/Footer'
import NosotrosSection from '../components/NosotrosSection/NosotrosSection'

const Nosotros = () => {
  return (
    <div>
        <Navbar/>
        <HeroImage heading='Conocenos' text='Somos la mejor opcion para elegir, porque somos bitppi!' />
        <NosotrosSection/>
        <Footer/>
    </div>
  )
}

export default Nosotros