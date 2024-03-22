import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import HeroImage from '../components/HeroImage/HeroImage'
import Form from '../components/Form/Form'
import Footer from '../components/Footer/Footer'

const Contacto = () => {
  return (
    <div>

<Navbar/>
<HeroImage heading= 'CONTACTO.' text= 'Por favor llamanos' />
<Form/>
<Footer/>
    </div>
  )
}

export default Contacto