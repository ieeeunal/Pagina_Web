// Member card .
import React from 'react';
import { BsLinkedin } from "react-icons/bs";
import { BiLink } from "react-icons/bi";
import "pattern.css"

import '../Styles/MemberCard.sass';

export const MemberCard = ({ name, role, img, linkLinkedin, linkVarios, delay, fillColorIcon}) => {
	return (
		// <div className = "member-card transition-short align-items-center" data-aos="fade-up" data-aos-delay={`${250+delay}`}>
		<>
			<div className='position-relative'>
				<div className={`member-card transition-short align-items-center ${fillColorIcon}-bg-color`} >
					<div className="img-container">
						<img className="" src={img} alt={`${role}-${name}`} />
					</div>
					<h2 className="ml-0 mr-0 align-self-center mb-1"> {name} </h2>
					<h3> {role} </h3>
					<div className='member-card-redes'>
							{linkLinkedin !== undefined && linkLinkedin !== null && linkLinkedin !== '' ? (
								<a rel="noopener noreferrer" target="blank_" href={linkLinkedin}>
									{<BsLinkedin className={`white-color icons`} />}
								</a>
							) : ("")}
							{linkVarios !== undefined && linkVarios !== null && linkVarios !== '' ? (
								<a rel="noopener noreferrer" target="blank_" href={linkVarios}>
									{<BiLink className={`white-color icons`} />}
								</a>
							) : ("")}
					</div>
					<div className='pointPatter'></div>
				</div>
			</div>
		</>
	);
}