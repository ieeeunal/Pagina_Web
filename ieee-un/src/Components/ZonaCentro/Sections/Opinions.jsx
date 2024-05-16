import React from "react";
import "../../../Styles/OpinionsZC.sass"

import Carousel from 'react-bootstrap/Carousel';
import JohnChina from "./../../../Assets/zonaCentro/john-china.jpg"
import NextCarouselItem from "../Components/NextCarouselItem";
import { Col } from "react-bootstrap";

const PROXIMOS_EVENTOS = [
  {
    name: "John Xina",
    chief: "Vice AESS ANDES",
    message: "ESTE EVENTO ME CAMBIÓ LA VIDA. CONOCÍ EL CAPÍTULO DE ROBÓTICA Y LOS CHICOS FUERON MUY AMABLES. YA SÉ EN QUÉ QUIERO TRABAJAR CUANDO ME GRADÚE",
    image: JohnChina
  },
  {
    name: "John Xina",
    chief: "Vice AESS ANDES",
    message: "ESTE EVENTO ME CAMBIÓ LA VIDA. CONOCÍ EL CAPÍTULO DE ROBÓTICA Y LOS CHICOS FUERON MUY AMABLES. YA SÉ EN QUÉ QUIERO TRABAJAR CUANDO ME GRADÚE",
    image: JohnChina
  },
  {
    name: "John Xina",
    chief: "Vice AESS ANDES",
    message: "ESTE EVENTO ME CAMBIÓ LA VIDA. CONOCÍ EL CAPÍTULO DE ROBÓTICA Y LOS CHICOS FUERON MUY AMABLES. YA SÉ EN QUÉ QUIERO TRABAJAR CUANDO ME GRADÚE",
    image: JohnChina
  },
  {
    name: "John Xina",
    chief: "Vice AESS ANDES",
    message: "ESTE EVENTO ME CAMBIÓ LA VIDA. CONOCÍ EL CAPÍTULO DE ROBÓTICA Y LOS CHICOS FUERON MUY AMABLES. YA SÉ EN QUÉ QUIERO TRABAJAR CUANDO ME GRADÚE",
    image: JohnChina
  }
]

export default function Opinions() {
  return (
    <div id="opinions">
      <Col lg={6} className="carrusel">
        <Carousel variant="dark">
          {PROXIMOS_EVENTOS.map((evento, index) => (
            <Carousel.Item>
              <NextCarouselItem
                key={index}
                backgroud={index % 2 === 0 ? "carrItem1" : "carrItem2"}
                name={evento.name}
                chief={evento.chief}
                image={evento.image}
                message={evento.message}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Col>
      <Col>
        <h2>Algunos comentarios acerca del evento</h2>
      </Col>
    </div>
  );
}