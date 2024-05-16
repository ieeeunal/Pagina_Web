import React from "react";
import "../../../Styles/OpinionsZC.sass"
import quote from "./../../../Assets/zonaCentro/icon_quote.png"

export default function NextCarouselItem({ backgroud, name, chief, message, image }) {
    return (

        <div className={backgroud}>
            <img src={quote} alt="" />
            <p>{message}</p>
            <div className="carrPersona">
                <img src={image} alt="" />
                <div className="carDatos">
                    <h3 className="carDatos-Titulo">{name}</h3>
                    <h3>{chief}</h3>
                </div>
            </div>
        </div>
    );
}