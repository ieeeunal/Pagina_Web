import React, { useEffect, useState } from 'react';
// llamada a la base de datos
import { Axios } from 'axios';

// estilos
import '../Styles/media.sass'

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

export default function Media() {
    // const [socialMediaLinks, setSocialMediaLinks] = useState([]);

    // useEffect(() => {
    //     Axios.get("/member/list").then((result) => {
    //         setSocialMediaLinks(result.data);
    //     });
    // }, []);

    return (
        <>

            <div className="media-container">
                {/* <div className="mb-4 ml-2 media-container container d-flex flex-column">  */}
                <a rel="noopener noreferrer" target="blank_" href={socialMediaLinks.linkedin}><BsLinkedin className='logo-secondary-color-color icons' /></a>
                <a rel="noopener noreferrer" target="blank_" href={socialMediaLinks.facebook}><BsFacebook className={`logo-secondary-color-color icons`} /></a>
                <a rel="noopener noreferrer" target="blank_" href={socialMediaLinks.instagram}><BsInstagram className='logo-secondary-color-color icons' /></a>
                <a rel="noopener noreferrer" target="blank_" href={socialMediaLinks.youtube}><BsYoutube className='logo-secondary-color-color icons' /></a>
            </div>
            {/*<div className="media-container">
                // <div className="mb-4 ml-2 media-container container d-flex flex-column">  
                <a rel="noopener noreferrer" target="blank_" href="https://www.facebook.com/ieeeunbog"><img src={facebook} alt="" /></a>
                <a rel="noopener noreferrer" target="blank_" href="https://www.linkedin.com/company/rama-estudiantil-ieee-un"><img src={linkedin} alt="" /></a>
                <a rel="noopener noreferrer" target="blank_" href="https://www.youtube.com/channel/UCeTZBxrApbe3yn7-R8ovALA"><img src={youtube} alt="" /></a>
                <a rel="noopener noreferrer" target="blank_" href="https://www.instagram.com/ramaieeeun/"><img src={instagram} alt="" /></a>
            </div>*/}
        </>
    )

}