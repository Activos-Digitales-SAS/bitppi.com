import React from 'react';
import './FooterStyles.css';
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
                        <h4><FaPhone size={20} style={{ color: '#ffffff', marginRight: '2rem' }} />+57 315 222 3777</h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color: '#ffffff', marginRight: '2rem' }} />info@bitppi.com</h4>
                    </div>
                </div>
                <div className="right">
                    <h4 className='tituloFooter'>Nuestra Empresa</h4>
                    <p>"Somos Bitppi tu manera fácil de transferir dinero en criptomonedas, que esperas para descargar la app. Ofrecemos confianza y seguridad, regístrate ahora"</p>
                    <div className="social">
                        <a href="https://facebook.com/bitppi" className="social-icon">
                            <FaFacebook size={30} />
                        </a>
                        <a href="https://instagram.com/bitppi.app" className="social-icon">
                            <FaInstagram size={30} />
                        </a>
                        <a href="https://x.com/Bitppi1" className="social-icon">
                            <FaTwitter size={30} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
