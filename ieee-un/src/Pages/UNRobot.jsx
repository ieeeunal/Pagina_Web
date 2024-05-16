import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Col } from "react-bootstrap";

// Estilos
import "../Styles/UNRobot.sass";

import Hero from "../Components/Hero";
import Main from "../Components/main";
import RegistrationForm from "../Components/ZonaCentro/Sections/RegistrationForm";
import Sponsors from "../Components/Sponsors";

//Images
import Equipo from "../Assets/unRobot/Robot.png";
import Equipo2 from "../Assets/unRobot/Robot2.png";
import image from "../Assets/unRobot/buho2.png";

const PROXIMO_EVENTO = [
  {
    'day': '17',
    'month': '10',
    'year': '2024',
    'hour': "8:00:00"
  }
]

export default function UNRobot() {
  const siteNavLinks = [
    // { navLinkName: "Cronograma", scrollToId: "#schedule" },
    // { navLinkName: "Invitados", scrollToId: "#guests" },
    // { navLinkName: "Comentarios", scrollToId: "#opinions" },
    { navLinkName: "Inscríbete", scrollToId: "#registrationForm" },
    // { navLinkName: "Galería", scrollToId: "#gallery" },
    { navLinkName: "Eventos", scrollToId: "#nextEvents" },
  ];

  return (
    <>
      {/* <NavbarZC /> */}
      <Main colorBackground="unrobot" siteNavLinks={siteNavLinks}>
        <Hero chapterName={"unrobot"} color2={`unrobot-bg-color-a`} backImage={image}>
          <div class="heroUNR col-md-6">
            <div className="heroUNR_edicion">
              <span className="jaro-title">16</span>
              <b className="jaro-title">Edición</b>
            </div>
            <h2 className="title mr-5 jaro-title">UNROBOT</h2>
            {/* <h2 className="title mr-5">Categorias</h2> */}
          </div>
        </Hero>

        <section className={`section1-UNR full-width d-flex flex-column justify-content-center`} id="introUNRobot">
          <Container className="introUNRobot-container center" >

            <Row className='introUNRobot-container_tabla'>
              <Col className="introUNRobot-container_tabla-imagen" >
                <span className="dot"></span>
                <img className="intro" src={Equipo} alt="" />
              </Col>
              <Col className="introUNRobot-container_tabla-texto" >
                <h2><span>¿Qué es el</span> <br />UN<b>ROBOT?</b></h2>
                <p className="">
                  El UNRobot es el concurso de robótica gratuito más grande del país. Brindamos un espacio de aprendizaje y de profundización en robótica y temas afines. Buscamos construir una experiencia de lo que representa tangibilizar un proyecto en mecatrónico
                </p>
              </Col>
            </Row>
          </Container>
        </section>



        <section className={`section2-UNR full-width d-flex flex-column justify-content-center unrobot-bg-color`} id="participarUNRobot">
          <Container className="participarUNRobot-container center" >
            <Row className='participarUNRobot-container_tabla'>
              <Col className="participarUNRobot-container_tabla-texto">
                <h2><span>¿Comó </span> <br /> <b>Participar?</b></h2>
                <p>
                  Solo debes inscribirte a la categoría que desees y prepararte para el día de la competencia. ¡Las inscripciones son totalmente gratuitas!
                </p>
              </Col>
              <Col className="participarUNRobot-container_tabla-imagen">
                <img className="intro" src={Equipo2} alt="" />
              </Col>

            </Row>
          </Container>
        </section>
        {/* <Info /> */}
        {/* <Schedule /> */}
        {/* <Guests /> */}
        {/* <Opinions />*/}

        {PROXIMO_EVENTO.map((evento, index) => (
          <RegistrationForm textoInvitacion='Regístrate ahora y únete a una experiencia que transformará tu visión y ampliará tus horizontes. Descubre nuevas ideas, conoce a expertos en el campo, y forma parte de una comunidad apasionada por la innovación y el aprendizaje continuo. Tu participación no solo enriquecerá tu conocimiento, sino que también te conectará con oportunidades y personas que te inspirarán a alcanzar tus metas. ¡Inscríbete hoy y comienza a construir un futuro brillante junto a nosotros!' day={evento.day} month={evento.month} year={evento.year} hour={evento.hour} eventName="unrobot"/>
        ))}
        <Sponsors />
        {/* <Gallery /> */}
        {/* <NextEvents /> */}
      </Main>
    </>
  );
}