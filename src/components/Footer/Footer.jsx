import React from 'react';
import './FooterStyles.css'; // Asegúrate de que el nombre y la ruta del archivo CSS sean correctos
import { FaFacebook, FaInstagram, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        
                        <p><FaSearchLocation size={20} style={{ color: '#ffffff', marginRight: '1rem' }} />Norte de Santander</p>
                        <h4>Cl. 5 #13e-19, Br. Colsag, <br /> Cúcuta.</h4>
                    </div>
                </div>
                <div className="contact">
                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: '#ffffff', marginRight: '2rem' }} />+57 320 828 9705</h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color: '#ffffff', marginRight: '2rem' }} />info@bitppi.com</h4>
                    </div>
                </div>
                <div className="right">
                    <h4 className='tituloFooter'>Nuestra Empresa</h4>
                    <p>"Somos Bitppi tu manera fácil de transferir dinero en criptomonedas, que esperas para descargar la app. Ofrecemos confianza y seguridad, regístrate ahora"</p>
                    <div className="social">
                        <a href="https://facebook.com/bitppi">
                        <FaFacebook size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                        </a>
                        <a href="https://instagram.com/bitppi.app">
                        <FaInstagram size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                        </a>
                      <a href="https://twitter.com/bitppi"> <FaTwitter size={30} style={{ color: '#ffffff', marginRight: '1rem' }} /></a>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
