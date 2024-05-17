import React, { useEffect, useState } from 'react'
import Calendar from '../Components/Calendar'
import Main from '../Components/main'
import routes from '../Helpers/routes';

function Events() {
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
            {/* Events */}
            <Main colorBackground={color} siteNavLinks={siteNavLinks}>
                <section className="position-relative full-width" id="eventos" data-aos="zoom-in">
                    <div className="team-div d-flex flex-column align-items-center mt-5">
                        <div className="row mt-3 align-items-center">
                            <div className="col"><span className={`line-title ${color}-bg2-color`} /></div>
                            <div className="col team-title">Eventos</div>
                            <div className="col"><span className={`line-title ${color}-bg2-color`} /></div>
                        </div>
                    </div>
                    <Calendar></Calendar>
                </section>
            </Main>
        </>
    )
}

export default Events