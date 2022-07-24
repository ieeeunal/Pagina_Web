// Member card .
import { React, useState} from 'react'; 
import { BsLinkedin } from "react-icons/bs";
import { BiLink } from "react-icons/bi";

import '../Styles/MemberCard.sass'; 

export const  MemberCard = ({name, role, img, linkLinkedin, linkVarios}) => {
	// const [name_, setName] = useState(name); 
	// const [photo_, setPhoto] = useState(img); 
	// const [role_, setRole] = useState(role); 

	return (
			<div className = "member-card transition-short align-items-center ">
				<div className ="img-container position-relative">
					<img className = "position-relative" src= { img } alt="" />
				</div>
				<h2 className = "position-relative ml-0 mr-0 align-self-center mb-1"> { name } </h2>
				<h3> { role } </h3>
				<div className='member-card-redes'>
					<a rel="noopener noreferrer" target="blank_" href={linkLinkedin}>{<BsLinkedin className={`icons`} />} </a>
					<a rel="noopener noreferrer" target="blank_" href={linkVarios}>{<BiLink className={`icons`} />}</a>
				</div>

			</div>
		); 
}