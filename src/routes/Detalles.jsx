import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import HeroImage from '../components/HeroImage/HeroImage'
import Footer from '../components/Footer/Footer'
import DetalleServicio from '../components/DetalleServicios/DetalleServicio'


const Detalles = () => {
  return (
    <div>

<Navbar/>
        <HeroImage heading='Descripcion' text='De nuestros servicios.' />
        <DetalleServicio/>
        <Footer/>
    </div>
  )
}

export default Detalles