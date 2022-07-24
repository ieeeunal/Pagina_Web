import React from 'react'

import '../Styles/LandingPage.sass';
import Owl from '../Assets/Buho.svg';


const Hero = ({children}) => {
  return (
    <>
        <section className="section-1">
            <div className="heroSection">
                <div className="heroSection-text">
                    {children}
                </div>
                <div className="">
                    <img className="owl" src={Owl} alt="" />
                </div>
            </div>
		</section>
    </>
  )
}

export default Hero