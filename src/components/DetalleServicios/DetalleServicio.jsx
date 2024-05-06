import React from 'react';
import './DetalleServicioStyle.css';
import pasarela from '../../assets/pasarela.png';

const DetalleServicio = () => {
  return (
    <div className='body'>
      <div className="container">
        <div className="contentLeft">
          <div className="row">
            {/* Contenedor de la imagen con nueva clase */}
            <div className="fullWidthImageWrapper">
              <img src={pasarela} alt="Pasarela de Pago" />
            </div>
          </div>
        </div>
        <div className="contentRight">
          <div className="content">
            <h4>Servicio</h4>
            <h2>Pasarella de Pago</h2>
            <p>
              Bitppi transforma la forma de manejar tus criptomonedas, ofreciendo una ruta directa y segura para convertirlas en pesos y transferirlas a tu cuenta bancaria. Con solo unos clics, tus activos digitales se convierten al mejor tipo de cambio, asegurando eficiencia y tranquilidad. Priorizamos tu seguridad con tecnología avanzada y un equipo listo para asistirte. Rápido, seguro, y con atención personalizada, Bitppi es la solución ideal para gestionar tus criptomonedas. Convierte y disfruta de la simplicidad y rapidez que solo Bitppi te ofrece.
            </p>
            <a href="https://wa.link/o1fno9">WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetalleServicio;
