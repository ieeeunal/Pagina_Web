import { React } from 'react'
import '../Styles/NavBar.sass'
import logo from '../Assets/logo.svg';
import Login from '../Pages/Login';

export default function NavBar () {

    const navLinks = [
		{ navLinkName: 'Quienes Somos', scrollToId: '#quienes-somos' },
		{ navLinkName: 'Capítulos', scrollToId: '#capitulos' },
		{ navLinkName: 'Equipo', scrollToId: '#equipo' }
	];
    
    // const navLinks = [
	// 	{ navLinkName: 'Quienes Somos', scrollToId: '#quienes-somos' },
	// 	{ navLinkName: 'Capítulos', scrollToId: '#capitulos' },
	// 	{ navLinkName: 'Equipo', scrollToId: '#equipo' },
    //     { navLinkName: 'Eventos', scrollToId: '#eventos'},
    //     { navLinkName: 'Contáctanos', scrollToId: '#contacto'}
	// ];

    return (
        <>
            <nav className="section__navbar">
                <a className="section__navbar-logo" rel="noopener noreferrer" href='/'>
                    <img className="logo-small" src={logo} alt="logo IEEE-UN" />
                </a>
                <div className="section__navbar-list">
                    <ul className="section__navbar-items" id="supportedContent">
                        {
                            navLinks.map(id => {  
                                return (
                                    <li className="section__navbar-item">
                                        <a rel="noopener noreferrer" href={id.scrollToId}> {id.navLinkName} </a>
                                        <span></span>
                                    </li>
                                )
                            })
                        }
                        <li className="section__navbar-item">
                            <a rel="noopener noreferrer" href="/sign-in"> Login </a>
                            <span></span>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}