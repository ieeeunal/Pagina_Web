import { React, useEffect, useState } from 'react'

import '../Styles/NavBar.sass'
import logo from '../Assets/logo.svg';
import routes from '../Helpers/routes'
import { Link, NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavBar(props) {
    // const [dataPage, setDataPage] = useState(props.chapterName);
    const [logeo, setLogeo] = useState(false);
    const [rol, setRol] = useState('');
    useEffect(() => {
        if (sessionStorage.getItem('token') && sessionStorage.getItem('rolUser')) {
            setLogeo(true);
            setRol(sessionStorage.getItem('rolUser'));
            console.log("El rol del usuario es: ", rol)
        }

        // if (["aess", "aps", "ras", "wie", "pes", "emc", "emb", "eds", "computer", "tems"].includes(dataPage)) {
        //     setDataPage(props.chapterName)
        // } else if (dataPage === "zc"){   
        //     setDataPage("zc")  
        // }
    }, [])

    //console.log("el rol del visitante es: "+rol)

    const salir = () => {
        sessionStorage.clear()
        window.location.href = "/Pagina_Web"
    }

    // const navLinks = [
    //     { navLinkName: 'Inicio', scrollToId: routes.seccionInicio },
    //     { navLinkName: 'Quienes Somos', scrollToId: routes.seccionQuienesSomos },
    //     { navLinkName: 'Capítulos', scrollToId: routes.seccionCapitulos },
    //     { navLinkName: 'Equipo', scrollToId: routes.seccionEquipo },
    //     { navLinkName: 'Comentarios', scrollToId: routes.seccionComentarios }
    // ];

    // const navLinks = [
    //     { navLinkName: 'Quienes Somos', scrollToId: routes.seccionQuienesSomos },
    //     { navLinkName: 'Capítulos', scrollToId: routes.seccionCapitulos },
    //     { navLinkName: 'Equipo', scrollToId: routes.seccionEquipo }
    // ];

    // window.onscroll = function() {scrollFunction()};

    // function scrollFunction() {
    //     if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550 ) {
    //         document.getElementById("navbar").style.padding = "10px 30px";
    //         document.getElementById("navbar").style.background = "#070C20";
    //         document.getElementById("logo").style.width = "40px";
    //         // document.getElementById("navbar").style.backgroundColor = "ras-bg-color";
    //     } else {
    //         document.getElementById("navbar").style.background = "transparent";
    //         document.getElementById("navbar").style.padding = "30px 30px";
    //         document.getElementById("logo").style.width = "60px";
    //     }
    // }

    return (
        <>
            {/* <Navbar collapseOnSelect expand="md" className={`${props.chapterName}-bg-color section__navbar scroll-navbar`} id="navbar"   >
                <Container>
                    <Navbar.Brand>
                        <Link to={routes.home}>
                            <img
                                alt="logo IEEE-UN"
                                src={logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top logo-small"
                                id="logo"
                            />{' '}
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav section__navbar-list">
                        <Nav className="me-auto section__navbar-items">

                            {
                                props.siteNavLinks.map(id => {
                                    return (
                                        <Nav.Link className="section__navbar-item" href={id.scrollToId}>
                                            {id.navLinkName}
                                            <span></span>
                                        </Nav.Link>
                                    )
                                })
                            }

                        </Nav>
                        <Nav className="section__navbar-items">
                            <a class="btn login" href={routes.login}>Iniciar Sesión</a>
                        </Nav> 
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}

            <Navbar collapseOnSelect expand="md" className={`${props.chapterName}-bg-color section__navbar scroll-navbar`} id="navbar"   >
                <Container>
                    <Navbar.Brand>
                        <Link to={routes.home}>
                            <img
                                alt="logo IEEE-UN"
                                src={logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top logo-small"
                                id="logo"
                            />{' '}
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav section__navbar-list">
                        <Nav className="me-auto section__navbar-items">
                            {props.siteNavLinks.map(id => {
                                return (
                                    <Nav.Link className="section__navbar-item" href={id.scrollToId}>
                                        {id.navLinkName}
                                        <span></span>
                                    </Nav.Link>
                                )
                            })}
                        </Nav>
                            {
                                // rol === "Administrador" || rol === "Gestor" ? 
                                rol === "Administrador" ?
                                    <>
                                        <Nav.Link href={routes.admin} className="section__navbar-item-varios">Dashport</Nav.Link>
                                        <Nav.Link href={routes.home} className="section__navbar-item-varios" onClick={() => salir()}>Salir</Nav.Link>
                                    </>
                                :
                                rol === "Gestor" ?
                                    ""
                                    :
                                    <Nav className="section__navbar-items-varios">
                                        <a class="btn login" href={routes.login}>Iniciar Sesión</a>
                                    </Nav>
                            }
                        
                            {/* {
                                rol === "Administrador" || rol === "Gestor"
                                    ?
                                    rol === "Administrador" ?
                                        <div className="section__navbar-list">
                                            <ul className="section__navbar-items" id="supportedContent">
                                                <NavLink to={routes.admin} className="nav-item nav-link">Dashport</NavLink>
                                                <NavLink to={routes.home} className="nav-item nav-link" onClick={() => salir()}>Salir</NavLink>
                                            </ul>
                                        </div>
                                        :
                                        <div className="section__navbar-list">
                                        </div>
                                    : <div className="section__navbar-list">
                                        <ul className="section__navbar-items" id="supportedContent">
                                            <li className="section__navbar-item">
                                                <Link rel="noopener noreferrer" to={routes.login}> Login </Link>
                                                <span></span>
                                            </li>
                                        </ul>
                                    </div>
                            } */}
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}