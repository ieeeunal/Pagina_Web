import React from 'react'
import Forms from './Form.jsx'
import AOS from 'aos';
import "aos/dist/aos.css";

// logos 
import logo from '../Assets/logo.svg';
import facebook from '../Assets/facebook.svg';
import linkedin from '../Assets/linkedin.svg';
import instagram from '../Assets/instagram.svg';
import youtube from '../Assets/Youtube.svg';

import styles from '../Styles/Footer.module.sass'
// import styles from '../Styles/Footer.sass'
import { Link } from 'react-router-dom';
import Contact from '../Pages/Contact.jsx';
import routes from '../Helpers/routes.js';

// logos 
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsInstagram } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';

const socialMediaLinks = {
    "facebook": 'https://www.facebook.com/ieeeunbog',
    "linkedin": 'https://www.linkedin.com/company/ieeeunal/',
    "youtube": 'https://www.youtube.com/channel/UCeTZBxrApbe3yn7-R8ovALA',
    "instagram": 'https://www.instagram.com/ieeeunal/',
}

const Footer = (props) => {
    AOS.init();
    AOS.refresh();
    return (
        <>
            <hr className={styles.separator} />
            <div className={`${styles.container} ${props.chapterName}-bg-color`}>
                <div className={styles.bgImage} style={{ backgroundImage: `url(${logo})` }} data-aos="fade-up" data-aos-delay="50"></div>
                <div className={styles.containerData}>
                    <div className={styles.containerPersonalData} data-aos="fade-up" data-aos-delay="150">
                        <div className={styles.containerBranding}>
                            <img
                                alt="logo IEEE-UN"
                                src={logo}
                                width="70"
                                height="70"
                                className="d-inline-block align-top logo-small"
                                id="logo"
                            />
                            <p>Rama IEEE Universidad Nacional de Colombia Sede Bogotá</p>
                        </div>
                        <div className={styles.containerLocation}>
                            <a href='https://www.google.com/maps/place/411+-+Laboratorios+Ingenier%C3%ADa/@4.6386237,-74.0828204,19z/data=!4m6!3m5!1s0x8e3f9bcdd41780b9:0xe83e9f05c709ce16!8m2!3d4.6391575!4d-74.0825982!16s%2Fg%2F11c5gd0f_8?entry=ttu'>Carrera 45 # 26-85<br />Edificio 411, Patios de Ingenieria</a>
                            <p><br />Bogotá, Colombia<br />Cód. Postal: 111321</p>
                        </div>

                        <div className={styles.containerLocation}>
                            <a href='mailto:estieee_fibog@unal.edu.co'>estieee_fibog@unal.edu.co</a>
                        </div>
                    </div>

                    {/* <div className={styles.containerMenu} data-aos="fade-up" data-aos-delay="100">
                        <h2>Menú</h2>
                        <p className="a"><a href="#">Acerca de</a></p>
                        <p className="a"><a href="#">Contacto</a></p>
                        <p className="a"><a href="#">Eventos</a></p>
                        <p className="a"><a href="#">Eventos</a></p>
                    </div> */}

                    <div className={styles.containerMenu} data-aos="fade-up" data-aos-delay="200">
                        <h2>Eventos Recurrentes</h2>
                        <p className="a"><Link to={routes.zonaCentro}>Zona Centro</Link></p>
                        <p className="a"><Link to={routes.unRobot}>UN Robot</Link></p>
                        <p className="a"><Link to={routes.events}>Torneo de circuitos</Link></p>
                    </div>

                    <div className={styles.containerMenu} data-aos="fade-up" data-aos-delay="300">
                        <h2>Menú</h2>
                        <p className="a"><Link to={routes.home}>Inicio</Link></p>
                        <p className="a"><Link to={routes.contact}>Contacto</Link></p>
                        <p className="a"><Link to={routes.events}>Eventos</Link></p>
                    </div>
                </div>

                <div className={styles.containerFirm} data-aos="flip-up" data-aos-delay="400">
                    <p>© 2021, <span>IEEE UNAL</span>. All Rights Reserved. Creado con ♥︎ </p>
                    <div className={styles.containerMedia}>
                        <a rel="noopener noreferrer" target="blank_" href={socialMediaLinks.linkedin}><BsLinkedin className='logo-secondary-color-color icons' /></a>
                        <a rel="noopener noreferrer" target="blank_" href={socialMediaLinks.facebook}><BsFacebook className={`logo-secondary-color-color icons`} /></a>
                        <a rel="noopener noreferrer" target="blank_" href={socialMediaLinks.instagram}><BsInstagram className='logo-secondary-color-color icons' /></a>
                        <a rel="noopener noreferrer" target="blank_" href={socialMediaLinks.youtube}><BsYoutube className='logo-secondary-color-color icons' /></a>

                        {/* <a rel="noopener noreferrer" target="blank_" href="https://www.facebook.com/ieeeunbog"><img src={facebook} alt="" /></a>
                        <a rel="noopener noreferrer" target="blank_" href="https://www.linkedin.com/company/rama-estudiantil-ieee-un"><img src={linkedin} alt="" /></a>
                        <a rel="noopener noreferrer" target="blank_" href="https://www.youtube.com/channel/UCeTZBxrApbe3yn7-R8ovALA"><img src={youtube} alt="" /></a>
                        <a rel="noopener noreferrer" target="blank_" href="https://www.instagram.com/ramaieeeun/"><img src={instagram} alt="" /></a> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer