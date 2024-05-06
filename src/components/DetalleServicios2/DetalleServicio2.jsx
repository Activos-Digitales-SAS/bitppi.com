import React from 'react';
import './DetalleServicioStyle.css';
import forense from '../../assets/forence.png';  // Corregir el nombre del archivo si es necesario

const DetalleServicio = () => {
  return (
    <div className='body'>
      <div className="container">
        <div className="contentLeft">
          <div className="row">
            {/* Contenedor de la imagen con nueva clase */}
            <div className="fullWidthImageWrapper">
              <img src={forense} alt="Forense Blockchain" />
            </div>
          </div>
        </div>
        <div className="contentRight">
          <div className="content">
            <h4>Servicio</h4>
            <h2>Forense Blockchain</h2>
            <p>
              En la vanguardia de la revolución tecnológica, Forense Blockchain se erige como una solución pionera, diseñada para empoderar a individuos y organizaciones mediante la seguridad, transparencia y eficiencia que solo la tecnología blockchain puede ofrecer. Nuestro servicio está especialmente concebido para aquellos que buscan no solo proteger sus activos digitales, sino también optimizar sus operaciones y explorar nuevas oportunidades en el mundo digital.
            </p>
            <a href="https://wa.link/o1fno9">WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetalleServicio;
