import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Axios from "axios";
import Swal from 'sweetalert2'

import styles from '../Styles/Sign.module.sass';

import Hero from '../Components/Hero'
import routes from '../Helpers/routes';

import { validateEmail } from '../Components/utils/Validation';

// import data from '../Components/utils/Chapters.json'
import initial from "../Assets/chapters/AESS.png"
import InlineError from '../Components/InlineError';


const Login = () => {
    const [chapterSelect, setChapterSelect] = useState("aess")
    const [image, setImage] = useState(initial);
    
    const [mail, setMail] = useState('')
    const [mailError, setMailError] = useState();
    const [password, setPassword] = useState('')
    
    const [itemsDataB, setItemsDataB] = useState([]);
    useEffect(() => {
        // *********** CALL TO DB *****
        Axios.get("/chapter/list").then((result) => {
            setItemsDataB(result.data);
        });
        // getActiveChaptersList()
        // updateImage()
    },[])    


    const getActiveChaptersList = () => {    
        let arrayChapters = []
        arrayChapters = itemsDataB.map(item => {
            if (!(item.name in arrayChapters)){
                arrayChapters.push(item.name)
            } 
        })

        // console.log("el valor de arrayChapters es: "+ arrayChapters)

        const imageSelect = arrayChapters[Math.floor(Math.random() * arrayChapters.length)]
        setChapterSelect(imageSelect)
        console.log("el valor de imageSlect es: "+imageSelect)
        import(`../Assets/chapters/${imageSelect}.png`).then( image => { 
            setImage( image.default );
        }).catch((e) => {
            // alert('Failed'); 
            console.log('Failed'); 
        })  
    }
        

    

    // const selectOneImage = () => {
    //     return (arrayChapters[Math.floor(Math.random() * arrayChapters.length)])
    // }
    

    // const updateImage = () => {
    //     const imageSelect = selectOneImage()
    //     setChapterSelect(imageSelect)
    //     console.log("el valor de imageSlect es: "+imageSelect)
    //     import(`../Assets/chapters/${imageSelect}.png`).then( image => 
    //         { 
    //             setImage( image.default );
    //         }
    //         ).catch((e) => {
    //             // alert('Failed'); 
    //             console.log('Failed'); 
    //         })
    //     // console.log(imageSelect)
    //     // setChapterSelect(imageSelect.toLowerCase())
    // }

    
    console.log("El valor de la variable chapterSelect es: "+chapterSelect)
    console.log("El valor de la variable image es: "+image)
    
    // *********** RUN FUNCTION RANDOM CHAPTER *****
    useEffect(() => {
        // *********** VALIDACION CORREO ***************
        validateEmail({ mail, setMailError });

        document.body.style.overflow = "hidden";
    },[mail])    
    

    const login=async(e)=>{
        e.preventDefault();
        const user = { mail, password}
        const response = await Axios.post('/user/login',user);
        const message = response.data.mensaje
        if(message !== `Bienvenido ${response.data.name}`){
          Swal.fire({  
            icon: 'error',
            title: message,
            showConfirmButton: false,
            timer: 5000
          })
        }
    
        else{
          const token= response.data.token
          const name= response.data.name
          const idUser=response.data.id
          const rolUser=response.data.role  
          sessionStorage.setItem('token',token)
          sessionStorage.setItem('name',name)
          sessionStorage.setItem('idUser',idUser)
          sessionStorage.setItem('rolUser',rolUser)
    
          Swal.fire({        
            icon: 'success',
            title: message,
            showConfirmButton: false,
            timer: 5000
          })
          window.location.href='/'
        }
      }

    return (
        <>
            <Hero chapterName={chapterSelect.toLowerCase()} backImage={image} >
                {/* <Hero chapterName="aess" color2="aess-color-b" backImage={ image }> */}
                {/* backImage={require(filePath).default} */}
                <form className={styles.formSignIn} onSubmit={login}>
                    <h3>Inicia sesion</h3>
                    <div className="mb-3">
                        <label>Correo</label>
                        <input type="email" id="Correo" className="form-control" placeholder="example@gmail.com" autoFocus required onChange={(e) => setMail(e.target.value)} />
                        {mailError && <InlineError error={mailError} />}
                    </div>
                    <div className="mb-3">
                        <label>Contraseña</label>
                        <input type="password" className="form-control" placeholder="Ingresa tu contraseña" id="Contraseña" required onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">Iniciar sesión</button>
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


