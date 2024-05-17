import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from "react-router-dom";

import '../Styles/LandingPage.sass';
import chapterItems from '../Components/utils/Chapters.json';

import Hero from '../Components/Hero'
import Main from '../Components/main'
import imageDefault from "../Assets/chaptersIndividualInfo/RAS/intro.png"
import initial from '../Assets/chaptersIndividualInfo/AESS/intro.png';
import YoutubeEmbed from '../Components/YoutubeEmbed';
import Axios from 'axios';
import routes from '../Helpers/routes';

const ChapterDetails = (props) => {
  const listColors = ["aess", "aps", "ras", "wie", "pes", "emc", "emb", "eds", "computer", "tems"]
  const [color, setColor] = useState('aess');
  const [image, setImage] = useState('');
  const [dataChapterDB, setDataChapterDB] = useState([])
  const siteNavLinks = [
    { navLinkName: 'Quienes Somos', scrollToId: routes.seccionQuienesSomos },
    { navLinkName: 'Capítulos', scrollToId: routes.seccionCapitulos },
    { navLinkName: 'Equipo', scrollToId: routes.seccionEquipo }
  ];

  useEffect(() => {
    Axios.get("/chapter/list").then((response) => {
      setDataChapterDB(response.data);
    }, (error) => {
      console.log(error);
    });
    let colorSelected = listColors[Math.floor(Math.random() * listColors.length)];
    setColor(colorSelected);
    // Imagen 
    import(`../Assets/chaptersIndividualInfo/${colorSelected.toUpperCase()}/intro.png`).then(image => {
      setImage(image.default);
    }).catch((e) => {
      setImage(imageDefault);
      alert('Failed');
    })
    // *********** CALL TO DB *********** //
    // const getDataChapters = () => {
    //   Axios.get("/chapter/list").then((result) => {
    //     setDataChapterDB(result.data);
    //   });
    // };
    // getDataChapters();
  }, []);

  //console.log(dataChapterDB)
  const params = useParams();
  // console.log(params.chapterId)
  //const actualPage = params.chapterId.toLowerCase();

  // const updateImage = () => {
  // import(`../Assets/chaptersIndividualInfo/${params.chapterId}/intro.png`).then(image => {
  // setImage(image.default);
  // }
  // ).catch((e) => {
  // alert('Failed');
  // })
  //   }

  console.log(dataChapterDB)

  return (
    <>
      <Main colorBackground={color} siteNavLinks={siteNavLinks}>
        <Hero chapterName={color} color2={`${color}-color-b}`} backImage={image}>
          <h2 className='title mr-5'>Capitulo: {params.chapterId}</h2>
        </Hero>

        {dataChapterDB.map((chapter) => {
          if (chapter.name === params.chapterId) {
            return (
              <>
                <div className='section-3 full transition-short'>
                  <h1 className='title mr-5' id="quienes-somos">  {chapter.nameLong}:</h1>
                  <p> {chapter.definicionCap} </p>
                  <p> {chapter.info} </p>
                  <p> Estado: {chapter.estado} </p>

                  <a href={chapter.globalWebpage}>Pagina capitulo a nivel mundial </a>

                  <h3>Nuestros Proyectos</h3>
                  <p> blanfldsbaflsadbf knsdalfj dnlsfkajldsajf ljsalfdj </p>


                  <h3>¿Qué es IEEE para nosotros?</h3>
                  <p> blanfldsbaflsadbf knsdalfj dnlsfkajldsajf ljsalfdj </p>

                  <h3>Beneficios de Trabajar con Nosotros</h3>
                  <p>Los beneficios de trabajar con nosostros son:  </p>

                  <h3>Equipo</h3>
                  <p>El equipo de {chapter.name} está conformado por: </p>

                  {/* <p>El equipo de {chapter.junta.name} está conformado por: </p> */}
                  {/* <p>El equipo de {chapter.junta.presidencia.name} está conformado por: </p> */}
                  {/* {Object.keys.map.chapter(test => (
                    <div>
                      <p> {test.name} </p>
                      <p> {test.role} </p>
                      <p> {test.id} </p>
                      <p> {test.linkLinkedin} </p>
                      <p> {test.linkVarios} </p>
                    </div>                    
                  ))} */}

                  {chapter.estado === 'activo' ? (
                    <div>
                      <h3>Unete a nosotros</h3>
                      <a href={`${chapter.formsConvocatoria}`}> Enlace convocatoria </a>
                    </div>
                  ) : ("")}



                </div>
              </>
            )
          }
        })
        }


{dataChapterDB.map((chapter) => {
          if (chapter.name === params.chapterId) {
            return (
              <>
                <div className='section-3 full transition-short'>
                  <h1 className='title mr-5' id="quienes-somos">  {chapter.nameLong}:</h1>
                  <p> {chapter.definicionCap} </p>
                  <p> {chapter.info} </p>
                  <p> Estado: {chapter.estado} </p>

                  <a href={chapter.globalWebpage}>Pagina capitulo a nivel mundial </a>

                  <h3>Nuestros Proyectos</h3>
                  <p> blanfldsbaflsadbf knsdalfj dnlsfkajldsajf ljsalfdj </p>


                  <h3>¿Qué es IEEE para nosotros?</h3>
                  <p> blanfldsbaflsadbf knsdalfj dnlsfkajldsajf ljsalfdj </p>

                  <h3>Beneficios de Trabajar con Nosotros</h3>
                  <p>Los beneficios de trabajar con nosostros son:  </p>

                  <h3>Equipo</h3>
                  <p>El equipo de {chapter.name} está conformado por: </p>

                  {/* <p>El equipo de {chapter.junta.name} está conformado por: </p> */}
                  {/* <p>El equipo de {chapter.junta.presidencia.name} está conformado por: </p> */}
                  {/* {Object.keys.map.chapter(test => (
                    <div>
                      <p> {test.name} </p>
                      <p> {test.role} </p>
                      <p> {test.id} </p>
                      <p> {test.linkLinkedin} </p>
                      <p> {test.linkVarios} </p>
                    </div>                    
                  ))} */}

                  {chapter.estado === 'activo' ? (
                    <div>
                      <h3>Unete a nosotros</h3>
                      <a href={`${chapter.formsConvocatoria}`}> Enlace convocatoria </a>
                    </div>
                  ) : ("")}



                </div>
              </>
            )
          }
        })}
        {/* {dataChapterDB.junta.map((payload) => {
          return (
            <div>
              <p> {payload.name} </p>
              <p> {payload.role} </p>
              <p> {payload.id} </p>
              <p> {payload.linkLinkedin} </p>
              <p> {payload.linkVarios} </p>
            </div>
          )
        })}; */}

        {/* <YoutubeEmbed embedId="nxeQYZjBNzc" title="algo de nuestro trabajo" message="Lorem ipson" /> */}


      </Main>
    </>

  )
}

export default ChapterDetails