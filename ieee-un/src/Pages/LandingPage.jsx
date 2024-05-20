/*
Landing Page v3.0 (19-05-2024)
Página principal de la aplicación.
Contiene toda la información de la rama.
*/

import { React, useEffect, useState } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

// Pdf
import pdfInfo from "../Assets/InfoDoc_IEEEUNAL.pdf"

// Images
import Owl from '../Assets/Buho.svg';
import learn from '../Assets/learn.png'
import events from '../Assets/events.png';
import team from '../Assets/team.png';
// import Equipo from '../Assets/Equipo.png';

// Routes
import routes from '../Helpers/routes';

// Styles
import '../Styles/LandingPage.sass';

// Componets
import { Chapter } from '../Components/Chapter';
import { CardsList } from '../Components/CardsList';
import Media from "../Components/Media";
import Main from '../Components/main';
import Hero from '../Components/Hero';
import YoutubeEmbed from '../Components/YoutubeEmbed'
import WordCloud from '../Components/WordCloud';
import ColorSelecter from '../Components/ColorSelecter';
// import Modal from '../Components/Modal';
// import { GetDataDB } from '../Components/utils/callDB';
// import { SelectColor } from '../Components/utils/selectColor';
// import { firebase } from '../Firebase/ConfigFirebase';

// const db = firebase.database(); 
// const refMembers = db.ref(`members`); 
// const refGeneral = db.ref(`general`); 

export default function LandingPage() {
	const listColors = ["aess", "aps", "ras", "wie", "pes", "emc", "emb", "eds", "computer", "tems", "zc"]
	const [color, setColor] = useState('aess');
	const siteNavLinks = [
		{ navLinkName: 'Quienes Somos', scrollToId: routes.seccionQuienesSomos },
		{ navLinkName: 'Capítulos', scrollToId: routes.seccionCapitulos },
		{ navLinkName: 'Equipo', scrollToId: routes.seccionEquipo }
	];

	const changeColor = (id) => {
		setColor(id);
	}

	useEffect(() => {
		AOS.init();
		AOS.refresh();
		document.body.style.overflow = "visible";
		let colorSelected = listColors[Math.floor(Math.random() * listColors.length)];
		setColor(colorSelected);
	}, []);

	useEffect(() => {
		document.body.style.overflow = "visible";
	}, []);

	return (
		<>
			<Main colorBackground={color} siteNavLinks={siteNavLinks}>
				<div id="inicio"></div>
				<Media />
				<Hero backImage={Owl} chapterName={color} color2={`${color}-color-b}`} secondColor="Active" >
					<h2 className="title mr-5"> IngEEEnia tu camino UNAL </h2>
					{/* <Link className="ml-4 ver-mas slide-bottom" to={routes.chapter}>Ver mas</Link> */}
					{/* <a className="ml-4 ver-mas slide-bottom" href={pdfInfo}>Ver mas</a> */}
					<a className="ml-4 ver-mas slide-bottom" href={pdfInfo}>Ver mas</a>

				</Hero>
				{/* <Modal/> */}

				{/* <section className="section-3 mt-5  pt-5 full-width d-flex flex-column justify-content-center"> */}
				<section className="section-3 full-width d-flex flex-column justify-content-center" id="quienes-somos" data-aos="fade-down" data-aos-delay="500">
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
							<div className="col d-flex justify-content-center" data-aos="fade-up" data-aos-delay="300">
								<p className="a">
									+260
								</p>
								<p className="b">
									Miembros
								</p>
							</div>

							<div className="col d-flex justify-content-center" data-aos="fade-up" data-aos-delay="500">
								<p className="a">
									12
								</p>
								<p className="b">
									Capítulos
								</p>
							</div>


							<div className="col d-flex justify-content-center" data-aos="fade-up" data-aos-delay="700">
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
					<Chapter changeColor={changeColor} color={color} />
				</section>

				{ /* Team */}
				<section className="position-relative full-width pt-5" style={{ height: 'fit-content' }}>
					<div className="team-div d-flex flex-column align-items-center mt-5" id="equipo">
						<img className="team-icon" src={team} alt="" />
						<div className="row mt-3 align-items-center">
							<div className="col"><span className="line-title" /></div>
							<div className="col team-title">Nuestro Equipo</div>
							<div className="col"><span className="line-title" /></div>
						</div>
					</div>
					<div className="w-100 position-relative" style={{ height: 'fit-content' }}>
						<div className="arrow-up"> </div>
						<div className="card-container-team position-relative">
							<CardsList />
						</div>
					</div>
					<div className="arrow-down"> </div>
				</section>

				{/* WordCloudThingToLearn */}
				<section className="position-relative full-width" id="ieeestaCharla" data-aos="">
					<div className="team-div d-flex flex-column align-items-center mb-5" id="equipo">
						<img className="team-icon" src={learn} alt="" />
						<div className="row mt-3 align-items-center">
							<div className="col"><span className="line-title" /></div>
							<div className="col team-title">¿Qué temas la gente quiere aprender con nosotros?</div>
							<div className="col"><span className="line-title" /></div>
						</div>
					</div>
					<WordCloud />
				</section>


				{ /* Events */}
				<section className="position-relative full-width" id="eventos" data-aos="zoom-in">
					<div className="team-div d-flex flex-column align-items-center">
						<img className="team-icon" src={events} alt="" />
						<div className="row mt-3 align-items-center mt-5">
							<div className="col"><span className="line-title" /></div>
							<div className="col team-title">Eventos</div>
							<div className="col"><span className="line-title" /></div>
						</div>
					</div>
				</section>
			</Main>
		</>
	)
}