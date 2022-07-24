/*
Landing Page v1.0 (20-07-2022)
Página principal de la aplicación.
Contiene toda la información de la rama.
*/

import { React, useState} from 'react';

import NavBar from "../Components/Navbar";
import Media from "../Components/Media";

import Owl from '../Assets/Buho.svg';

import '../Styles/LandingPage.sass';
import { Chapter } from '../Components/Chapter';
import { CardsList } from '../Components/CardsList';

import team from '../Assets/team.png';
import Hero from '../Components/Hero';
import Form from '../Components/Form';

export default function LandingPage () {
	const [color, setColor ] = useState('aess');

	const changeColor = (id) => {
		// console.log(id)
		setColor(id);
	}


	// const handleClick = () => {
	// 	document.getElementById(scrollToId).scrollIntoView({ behavior: 'smooth' });
	// };

	
	return (
		<>
			<NavBar />
			<Media />
			<Hero >
				<h2 className="title mr-5"> Ingenia tu camino </h2>
                <a className="ml-4 ver-mas slide-bottom">Ver mas</a>
			</Hero>
			<section className="section-2"> </section>

			{/* <section className="section-3 mt-5  pt-5 full-width d-flex flex-column justify-content-center"> */}
			<section className="section-3 full-width d-flex flex-column justify-content-center" id="quienes-somos">
				<div className="quienes-somos-container center">
					<br />
					<br />
					<br />
					<h1 className="title-container align-text-center"> ¿Quienes Somos? </h1>

					<p className="">
						La Rama Estudiantil IEEE de la Universidad Nacional de Colombia es un grupo estudiantil, asociado a
						el Institute of Electrical and Electronics Engineers (IEEE), perteneciente a la región 9 comprendida
						por Latinoamérica y el Caribe, e igualmente a Sección Colombia
					</p>

					<br />
					<br />

					<div className=""> </div>
					<hr />

					<div className="data-container row d-flex  justify-content-center align-items-center">
						<div className="col d-flex justify-content-center">
							<p className="a">
								+162
							</p>
							<p className="b">
								Miembros
							</p>
						</div>

						<div className="col d-flex justify-content-center">
							<p className="a">
								12
							</p>
							<p className="b">
								Capítulos
							</p>
						</div>


						<div className="col d-flex justify-content-center">
							<p className="a">
								32
							</p>
							<p className="b">
								Proyectos
							</p>
						</div>
					</div>
				</div>
			</section>

			{ /* Carousel */}
			<section className={`position-relative full mt-5 transition-short ${color}-bg-color `} id="capitulos"> 
				<Chapter changeColor={ changeColor } color={ color } />
			</section>

			{ /* Team */ }
			<section className = "position-relative full-width pt-5" style = {{ height: 'fit-content'}}>
				<div className = "team-div d-flex flex-column align-items-center mt-5">
					<img className = "team-icon" src= { team } alt=""/ >
					<div className = "row mt-3 align-items-center">
						<div className = "col"><span className = "line-title" /></div>
						<div className = "col team-title">Nuestro Equipo</div>
						<div className = "col"><span className = "line-title" /></div>
					</div>				
				</div>
				<div className = "w-100 position-relative" style = {{ height: 'fit-content'}}>
					<div className = "arrow-up"> </div>
					<div className = "card-container-team position-relative" id="equipo">
						<CardsList /> 
					</div>
				</div>
			</section> 

			{/* Form */}

			<section className = "position-relative full">
				<Form /> 
			</section> 

		</>
	)
}