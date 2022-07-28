import { React, useState } from 'react'

import styles from '../Styles/Sign.module.sass';

import Hero from '../Components/Hero'
import routes from '../Helpers/routes';

import data from '../Components/utils/Chapters.json'
import initial from "../Assets/chapters/AESS.png"

import { Link } from 'react-router-dom';

const Login = () => {
    let arrayChapters = []
    let chapterSelect

    const [image, setImage] = useState(initial);

    data.map(item => {
        if (!(item.name in arrayChapters)){
            arrayChapters.push(item.name)
        }
    })

    const selectOneImage = () => {
        return (arrayChapters[Math.floor(Math.random() * arrayChapters.length)])
    }
    
    const updateImage = () => {
        const imageSelect = selectOneImage()
        chapterSelect = imageSelect.toLowerCase()
        import(`../Assets/chapters/${imageSelect}.png`).then( image => 
            { 
                setImage( image.default );
            }
            ).catch((e) => {
                alert('Failed'); 
            })
    }

    updateImage()
    
    return (
        <>
        <Hero chapterName={chapterSelect} backImage={ image }>
            {/* <Hero chapterName="aess" color2="aess-color-b" backImage={ image }> */}
        {/* backImage={require(filePath).default} */}
        <form className={styles.formSignIn}>
                    <h3>Inicia sesion</h3>
                    <div className="mb-3">
                        <label>Usuario</label>
                        <input type="email" className="form-control" placeholder="Ingresa tu email" />
                    </div>
                    <div className="mb-3">
                        <label>Contraseña</label>
                        <input type="password" className="form-control" placeholder="Ingresa tu contraseña" />
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">
                            Iniciar sesión
                        </button>
                    </div>
                    <p className={`${styles.forgotPassword} text-right`}>
                        <Link to={routes.identidy} rel="noopener noreferrer">¿Olvidaste tu contraseña?</Link>
                    </p>
                </form>
        </Hero>
        </>
    )
}

export default Login


