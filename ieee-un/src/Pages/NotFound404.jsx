import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// Estilos
import styles from "../Styles/404.module.sass"

// Componentes
import Hero from '../Components/Hero'
import Media from '../Components/Media'

// Rutas
import routes from '../Helpers/routes'




const NotFound404 = () => {
  const listColors = ["aess", "aps", "ras", "wie", "pes", "emc", "emb", "eds", "computer", "tems"]
	const [color, setColor] = useState('aess');
  const [image, setImage] = useState('');
  useEffect(() => {
    document.body.style.overflow = "hidden";
    let colorSelected = listColors[Math.floor(Math.random() * listColors.length)];
    setColor(colorSelected);

    // Imagen 
    import(`../Assets/chapters/${colorSelected.toUpperCase()}.png`).then(image => {
			setImage(image.default);
    }).catch((e) => {
      alert('Failed');
    })
  }, []); // Se ejecuta solo una vez al cargar la página

  return (
    <>
      <Media />
      <Hero chapterName={color} color2={`${color}-color-b`} secondColor="Active" backImage={image}>
        <div class="col-md-6">
          <h2 className="title mr-5">Error 404</h2>
          <div className={styles.buttonText}>
            <p> Ir al </p>
              <Link to={routes.home} className="ml-4 ver-mas slide-bottom">Home</Link>
          </div>
        </div>
      </Hero>
    </>
  )
}

export default NotFound404