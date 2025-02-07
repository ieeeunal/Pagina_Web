import React from "react";
import "../../../Styles/scheduleZC.sass"


const dataPlace = [
  { hour: "07:00", place: "Sábado 23 de septiembre de 2023", icon: "izqSup-Reloj" },
  { hour: "Edifico 411 - Patios", place: "Universidad Nacional de Colombia", icon: "izqInf-Pointer" },

]

const dataActivities = [
  { hour: "07:00", activity: "Bienvenida al evento" },
  { hour: "08:00", activity: "Reunión de presidentes de la rama" },
  { hour: "12:30", activity: "Almuerzo - Networking" },
  { hour: "14:00", activity: "Juego de Rol - Glass Onion: ¿Quién mató a EMB?" }
]

export default function Schedule() {
  return (
    <div id="schedule">
      <h2>Cronograma</h2>
      <div className="secciones">
        <div className="seccIzq">
          <div className="izqSup">
            <span className="izqSup-Reloj"></span>
            <div className="izqSup-textos">
              <h3>Sábado 27 de septiembre de 2025</h3>
              <h3>08:00 am</h3>
            </div>
          </div>
          <div className="izqInf">
            <span className="izqInf-Pointer"></span>
            <div className="izqInf-textos">
              <h3>Universidad Nacional de Colombia</h3>
              <h3>Edifico 500 - Agronomia</h3>
            </div>
          </div>
        </div>
        <div className="seccDer">
          {dataActivities.map((evento, index) => (
            <div className="containerSeccDer-Evento">
              <div className="seccDer-Evento">
                <h3 className="seccDer-t2">{evento.hour}</h3>
                <h3 className="seccDer-c">{evento.activity}</h3>
              </div>
              <span className="underline"></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}