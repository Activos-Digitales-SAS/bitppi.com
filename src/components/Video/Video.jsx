import React from 'react';
import { Link } from 'react-router-dom';
import './VideoStyles.css';

// Importa ambos videos
import spaceVideo from '../../assets/videoFondo.mp4';
import mobileVideo from '../../assets/fondoCelu.mp4'; // Asume que este es tu video para móviles

const Video = () => {
    return (
        <div className="hero">
          {/* Video predeterminado para escritorio */}
          <video autoPlay loop muted id="video" className="desktopVideo">
            <source src={spaceVideo} type="video/mp4" />
          </video>
          {/* Video para móviles */}
          <video autoPlay loop muted id="mobileVideo" className="mobileVideo">
            <source src={mobileVideo} type="video/mp4" />
          </video>
          <div className="content">
            <h1 className='tituloBP'>¡Vende o Compra!</h1>
            <p>Rapido, seguro y protegido. Empieza ya </p>
            <div>
            <a href="/Bitppi.apk" download className='btn'>
                Descargar APK!
              </a>
            

              <a href="https://wa.link/ksaz1n">
              <button className='btn btn-light'>WhatsApp</button>
              </a>
              <br />
              <a href=""></a>
            </div>
          </div>
        </div>
    );
}

export default Video;
