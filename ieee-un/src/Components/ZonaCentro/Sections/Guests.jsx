import React from "react";
import "../../../Styles/invitadosZC.sass"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

// import img1 from "./../../../Assets/zonaCentro/john-china.jpg"
import img1 from "./../../../Assets/zonaCentro/image_1.png"
import img2 from "./../../../Assets/zonaCentro/image_2.png"
import img3 from "./../../../Assets/zonaCentro/image_3.png"
import img4 from "./../../../Assets/zonaCentro/image_4.png"
import { Card, Image } from "react-bootstrap";

const PROXIMOS_EVENTOS = [
  {
    nombre: "Universidad Javeriana",
    profesion: "4 de mayo, 2024",
    imagen: img1
  },
  {
    nombre: "Universidad Javeriana",
    profesion: "4 de mayo, 2024",
    imagen: img2
  },
  {
    nombre: "Universidad Javeriana",
    profesion: "4 de mayo, 2024",
    imagen: img3
  },
  {
    nombre: "Universidad Javeriana",
    profesion: "4 de mayo, 2024",
    imagen: img4
  }
]

export default function Guests() {
  return (
    <>
      <div className="guests zc-bg-color" >
        <Container>
          <h2 id="guests">Invitados</h2>
          <h5>¡Bienvenid@ a nuestra galería de invitados especiales! </h5>
          <p>
            Nos complace presentar a talentosos individuos que dejarán una huella significativa en sus campos de especialización. Desde expertos en tecnología hasta líderes en innovación y creatividad, cada persona aquí representa el espíritu de excelencia y el deseo de inspirar y motivar a otros. Nuestros invitados representan la excelencia en sus áreas y son una inspiración para aquellos que aspiran a alcanzar nuevas alturas.
            <br /> <br />
            Agradecemos sinceramente a cada uno de ellos por compartir sus conocimientos, experiencias y perspectivas con nuestra comunidad. Esperamos que disfrutes explorando la colección de talento y logros de estos invitados especiales, y que te lleves inspiración y aprendizaje de cada historia compartida por ellos aquí.
          </p>
        </Container>
        <Container className="guests-container">
          {PROXIMOS_EVENTOS.map((evento, index) => (
            <Card key={index} className="guest-card border-0">
              <Image src={evento.imagen} alt={evento.nombre} className="guest-image" />
              <Card.Body>
                <Card.Title>{evento.nombre}</Card.Title>
                <Card.Text>{evento.profesion}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Container>
      </div>
    </>
  );
};
