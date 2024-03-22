import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import HeroImage from '../components/HeroImage/HeroImage'
import Footer from '../components/Footer/Footer'
import DetalleServicio2 from '../components/DetalleServicios2/DetalleServicio2.jsx'


const Detalles2 = () => {
  return (
    <div>

<Navbar/>
        <HeroImage heading='Descripcion' text='De nuestros servicios.' />
        <DetalleServicio2/>
        <Footer/>
    </div>
  )
}

export default Detalles2