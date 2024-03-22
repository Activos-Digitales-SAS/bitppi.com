import React from 'react'
import './ServiciosStyles.css'
import { Link } from 'react-router-dom';


const Servicios = () => {
  return (
    <div className='pricing'>
        <div className="card-container">
            <div className="card">
                <h3>Pasarela de Pago</h3>
                <span className='bar'></span>
                <p className='btc'>Nuestra plataforma innovadora te ofrece la libertad de convertir tus criptomonedas en pesos con total confianza y facilidad. Con Bitppi, la conversión de criptomonedas a pesos nunca fue tan fácil, segura y rápida; Únete a la revolución financiera digital! </p>
              
              
                <div className="btn-container">
        <Link to='/detalles' className='btn'>Saber mas!</Link>
      </div>
            </div>

            <div className="card">
                <h3>Forense Blockchain</h3>
                <span className='bar'></span>
            
                 <p className='btc'>Adéntrate en la era digital con confianza y visión de futuro. Forense Block Chain te brinda las herramientas para crear un mañana más seguro, transparente y eficiente. Descubre el poder de la blockchain con Forense y lidera la transformación digital en tu sector.</p>

              
                <div className="btn-container">
        <Link to='/detalles2' className='btn'>Saber mas!</Link>
      </div>

            </div>

       

            
        </div>
    </div>
  )
}

export default Servicios