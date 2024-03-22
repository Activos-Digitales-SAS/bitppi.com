import React from 'react';
import './NosotrosSectionStyles.css';
import { Link } from 'react-router-dom';

import image1 from '../../assets/dale1.webp';
import image2 from '../../assets/dale2.webp';

const Nosotros = () => {
  return (
    <div className='training'>
        <div className="left">
            <h1>Nosotros</h1>
            <p>Nos posicionamos en la vanguardia de la tecnología financiera y blockchain, ofreciendo soluciones innovadoras que transforman la manera en que interactúas con el mundo digital. Con Bitppi, nuestra revolucionaria pasarela de pago, convertimos tus criptomonedas en pesos de forma segura y eficiente, facilitando la gestión de tus activos digitales. </p>
            <Link to='contacto' > <button className='btn'>Contacto</button> </Link>
        </div>
        <div className="right">
          <div className="img-container">
            <div className="image-stack top">
              <img src={image1} className='img' alt="" />
            </div>
            <div className="image-stack bottom">
              <img src={image2} className='img' alt="" />
            </div>
          </div>
        </div>
    </div>
  );
}

export default Nosotros;
