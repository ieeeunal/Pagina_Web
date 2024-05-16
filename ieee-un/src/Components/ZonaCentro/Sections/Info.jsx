import React from "react";

import "../../../Styles/infoZC.sass"

import img1 from "./../../../Assets/zonaCentro/landing/info.jpeg"
import img2 from "./../../../Assets/zonaCentro/Union.svg"


export default function Info() {
  return (
    <div id="info">
      <div className="zonaSuperior">
        <div className="zsIzquierda">
          <div className="zsiFigura"></div>
          <img src={img1} alt="" />
        </div>
        <div className="zsDerecha">
          <h2 className="zsdTitulo">
          ¡Bienvenido a la emocionante experiencia de las Zonas Centro del IEEE en Colombia! 
          </h2>
          <p className="zsdParrafo">
          Cada mes, universidades de todo el país se reúnen en este espacio vibrante para compartir ideas, proyectos y experiencias en un ambiente de colaboración y aprendizaje mutuo. Desde discusiones sobre proyectos actuales hasta la oportunidad de conectarse con capítulos de otras universidades, las Zonas Centro son el lugar ideal para expandir tu red de contactos, descubrir nuevas perspectivas y participar en actividades innovadoras que te inspiren. Únete a nosotros en esta aventura mensual donde la creatividad y la camaradería se encuentran en cada esquina. ¡No te pierdas esta oportunidad de ser parte de algo grande y significativo en el mundo de la ingeniería y la tecnología!
          </p>
        </div>
      </div>
      <div className="zonaInferior">
        <div className="ziIzquierda">
          <img src={img2} alt="" />
        </div>
        <div className="ziDerecha">
          <h2 className="zidTitulo">
            ¿Quieres conocer más?
          </h2>
          <div className="zidSubtitulo">
            <p>
              Explora y únete a nuestra comunidad. ¡Inscríbete ya para la próxima Zonas Centro! Juntos, vamos a crear proyectos impactantes y ampliar nuestras redes de contactos. 
            </p>
            <p>¡No te lo pierdas!</p>
          </div>
        </div>
      </div>
    </div>
  );
}