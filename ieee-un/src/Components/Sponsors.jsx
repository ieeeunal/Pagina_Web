
import React from 'react'

import '../Styles/Sponsors.sass';

const Sponsors_Logos = [
    { 0: 'mathworks' },
    { 1: 'Phoenix_Contact' },
    { 2: 'skulltrap' },
    { 3: 'TD' },
    { 4: 'colsein' },
    { 5: 'logoColcircuitos' }
]
export default function Sponsors() {

    const getCard = () => {
        const members = Sponsors_Logos.map((sponsor, i) => {
            let photo;
            try {
                photo = require(`../Assets/unRobot/Sponsors/${sponsor[i]}.png`);
            } catch (error) {
                try {
                    photo = require(`../Assets/unRobot/Sponsors/${sponsor}.jpeg`);
                } catch (error) {
                    try {
                        photo = require(`../Assets/unRobot/Sponsors/${sponsor}.jpg`);
                    } catch (error) {
                        photo = require(`../Assets/team/base.jpg`);
                    }
                }
            }
            return (
                <img className="sponsor-contaniner_imageItem" src={photo} alt={sponsor[i]} />
            )
        })
        return members;
    }
    return (
        <div className="sponsor-contaniner d-flex justify-content-center flex-wrap transition-short">
            {/* <h2 className='sponsor-contaniner_title'>Patrocinadores</h2> */}
            <h2 className='sponsor-contaniner_title'>Apoyan:</h2>
            <div className='sponsor-contaniner_image'>
                
                {getCard()}
            </div>
        </div>
    )
}