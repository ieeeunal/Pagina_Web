import React from 'react'
import Hero from '../Components/Hero'
// import { Link } from "react-router-dom"

import '../Styles/Sign.sass';

const Login = () => {
return (
    <>
        <Hero>
            <form className='formSign-in'>
                <h3>Sign In</h3>
                <div className="mb-3">
                    <label>Usuario</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="mb-3">
                    <label>Contraseña</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Iniciar sesión
                    </button>
                </div>
                <p className="forgot-password text-right">
                    <a href="https://www.google.com" rel="noopener noreferrer">¿Olvidaste tu contraseña?</a>
                </p>
            </form>
        </Hero>
    </>
)
}

export default Login