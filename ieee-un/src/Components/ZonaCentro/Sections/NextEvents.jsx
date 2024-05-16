import React from "react";
import Container from "react-bootstrap/Container";
import image from "../../../Assets/zonaCentro/nextevents/andes.jfif"
import NextEvent from "../Components/NextEvent";

const PROXIMOS_EVENTOS = [
  {
    nombre: "Universidad Javeriana",
    fecha: "4 de mayo, 2024",
    link: "https://www.instagram.com/p/C6KOkRULd87/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    imagen: image
  },
  {
    nombre: "Universidad Javeriana",
    fecha: "4 de mayo, 2024",
    link: "https://www.instagram.com/p/C6KOkRULd87/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    imagen: image
  }
]
export default  function NextEvents() {
  return (
    <Container as="section" fluid className="nextevents justify-content-center">
      <h2 id="nextEvents">Próximos eventos</h2>
      {PROXIMOS_EVENTOS.map((evento, index) => (
        <NextEvent
          key={index}
          name={evento.nombre}
          date={evento.fecha}
          link={evento.link}
          image={evento.imagen}
        />
      ))}
    </Container>
  );
}