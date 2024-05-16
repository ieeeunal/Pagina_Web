import React from "react";

import Main from "../Components/main";
import HeroZC from "../Components/ZonaCentro/Sections/HeroZC";
import Info from "../Components/ZonaCentro/Sections/Info";
import Schedule from "../Components/ZonaCentro/Sections/Schedule";
import Guests from "../Components/ZonaCentro/Sections/Guests";
import Opinions from "../Components/ZonaCentro/Sections/Opinions";
import RegistrationForm from "../Components/ZonaCentro/Sections/RegistrationForm";
import Gallery from "../Components/ZonaCentro/Sections/Gallery";
import NextEvents from "../Components/ZonaCentro/Sections/NextEvents";

const PROXIMO_EVENTO = [
  {
    day: '17', 
    month: '11', 
    year: '2024', 
    hour: "8:00:00" 
  }
]

export default function ZonaCentro() {
  console.log(PROXIMO_EVENTO)
  
  const siteNavLinks = [
    { navLinkName: "Cronograma", scrollToId: "#schedule" },
    { navLinkName: "Invitados", scrollToId: "#guests" },
    { navLinkName: "Comentarios", scrollToId: "#opinions" },
    { navLinkName: "Inscríbete", scrollToId: "#registrationForm" },
    { navLinkName: "Galería", scrollToId: "#gallery" },
    { navLinkName: "Eventos", scrollToId: "#nextEvents" },
];

  return (
    <>
      {/* <NavbarZC /> */}
      <Main colorBackground="zc" siteNavLinks={siteNavLinks}>
        <HeroZC />
        <Info  />
        <Schedule />
        <Guests />
        {/* <Opinions /> */}
        {PROXIMO_EVENTO.map((evento, index) => (
          <RegistrationForm  textoInvitacion='Regístrate ahora y únete a una experiencia que transformará tu visión y ampliará tus horizontes. Descubre nuevas ideas, conoce a expertos en el campo, y forma parte de una comunidad apasionada por la innovación y el aprendizaje continuo. Tu participación no solo enriquecerá tu conocimiento, sino que también te conectará con oportunidades y personas que te inspirarán a alcanzar tus metas. ¡Inscríbete hoy y comienza a construir un futuro brillante junto a nosotros!' day={evento.day} month={evento.month} year={evento.year} hour={evento.hour} 
          eventName="zc" />
        ))}
        
        {/* <p>{PROXIMO_EVENTO}</p>
        <p>{PROXIMO_EVENTO.day}</p> */}
        {/* <Gallery /> */}
        {/* <NextEvents /> */}
      </Main>
    </>
  );
}