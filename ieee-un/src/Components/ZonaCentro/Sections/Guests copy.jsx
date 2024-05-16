import React from "react";
import "../../../Styles/invitadosZC.sass"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import img1 from "./../../../Assets/zonaCentro/image_1.png"
import img2 from "./../../../Assets/zonaCentro/image_2.png"
import img3 from "./../../../Assets/zonaCentro/image_3.png"
import img4 from "./../../../Assets/zonaCentro/image_4.png"

export default function Guests() {
  return (
    <div id="guests" className="zc-bg2-color">
      <h2>Invitados</h2>

      <h5>¡Bienvenid@ a nuestra galería de invitados especiales! </h5>
      <p>
        Nos complace presentar a talentosos individuos que dejarán una huella significativa en sus campos de especialización. Desde expertos en tecnología hasta líderes en innovación y creatividad, cada persona aquí representa el espíritu de excelencia y el deseo de inspirar y motivar a otros. Nuestros invitados representan la excelencia en sus áreas y son una inspiración para aquellos que aspiran a alcanzar nuevas alturas.
        <br/> <br/>
        Agradecemos sinceramente a cada uno de ellos por compartir sus conocimientos, experiencias y perspectivas con nuestra comunidad. Esperamos que disfrutes explorando la colección de talento y logros de estos invitados especiales, y que te lleves inspiración y aprendizaje de cada historia compartida por ellos aquí.
      </p>
      <div className="guestsFotos">
        <article>
          <img src={img1} alt="" />
          <h3>Lorem Ipsum</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </article>
        <article>
          <img src={img2} alt="" />
          <h3>Lorem Ipsum</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </article>
        {/*<article>
          <img src={img3} alt="" />
          <h3>Lorem Ipsum</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </article>
        <article>
          <img src={img4} alt="" />
          <h3>Lorem Ipsum</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </article> */}
      </div>
    </div>
  );
}