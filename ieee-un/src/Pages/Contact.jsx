import React, { useEffect, useState } from 'react'
import Main from '../Components/main'
import "aos/dist/aos.css";
import Form from '../Components/Form';
import routes from '../Helpers/routes';

const Contact = (props) => {
	const listColors = ["aess", "aps", "ras", "wie", "pes", "emc", "emb", "eds", "computer", "tems"]
	const [color, setColor] = useState('aess');
	const siteNavLinks = [
        // { navLinkName: 'Quienes Somos', scrollToId: routes.seccionQuienesSomos },
        // { navLinkName: 'Capítulos', scrollToId: routes.seccionCapitulos },
        // { navLinkName: 'Equipo', scrollToId: routes.seccionEquipo }
    ];

	useEffect(() => {
		document.body.style.overflow = "visible";
		let colorSelected = listColors[Math.floor(Math.random() * listColors.length)];
		setColor(colorSelected);
	}, []);

	return (
		<>
			<Main colorBackground={color} siteNavLinks={siteNavLinks}>
				{/* Form */}
				<section className="position-relative" data-aos="fade-down" id="comentarios">
					<div className="team-div d-flex flex-column align-items-center mt-5">
						<div className="row mt-3 align-items-center">
							<div className="col"><span className={`line-title ${color}-bg2-color`} /></div>
							<div className="col team-title">Contáctanos</div>
							<div className="col"><span className={`line-title ${color}-bg2-color`} /></div>
						</div>
					</div>
					<Form />
				</section>
				{/* <section className={`position-relative full-width pt-5 ${color}-bg2-color `} style={{ height: 'fit-content' }} data-aos="zoom-in" > */}
			</Main>
		</>
	)
}

export default Contact;