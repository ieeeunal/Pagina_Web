import { React, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import routes from '../Helpers/routes'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { validateEmail } from '../Components/utils/Validation';
import InlineError from './InlineError';
import InputGroup from 'react-bootstrap/InputGroup';

import '../Styles/modal.sass'

import popUpImage from '../Assets/popUpImage.jpg';

function StaticExample(props) {
    const [show, setShow] = useState(true);
    const [mail, setMail] = useState('')
    const [mailError, setMailError] = useState();

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    // var myModal = new bootstrap.Modal(document.getElementById("exampleModal"));
    // myModal.show();

    useEffect(() => {
        // *********** VALIDACION CORREO ***************
        validateEmail({ mail, setMailError });
    }, [mail])

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch static backdrop modal
            </Button> */}
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                id="exampleModal"
            >

                <Modal.Header closeButton>
                    {/* <Modal.Title id="contained-modal-title-vcenter"> */}
                    {/* Invitación nuevos miembros */}
                    {/* </Modal.Title> */}
                </Modal.Header>
                <Modal.Body>
                    <Container className='modal-image'>
                        {/* <a rel="noopener noreferrer" target="blank_" href={popUpImage}> */}
                            <img src={popUpImage} alt="imagen convocatoria 2023" />
                        {/* </a> */}
                    </Container>
                    <Container className='modal-text'>
                        <h3 className='modal-text__title'>Unetemos!</h3>
                        <p className='modal-text__text'>Si estas interesado dejanos aqui tu correo electronico</p>
                    </Container>
                    <Container className="mb-3">
                        <Form method="POST" action="https://script.google.com/macros/s/AKfycby2H5AIpsmjNsVrp9ZRO6cpW2tPp7bV9cAChI0GZpkrcpQ8UmD8Y26x_m9DMZtBozFi/exec">
                            <InputGroup>
                                <Form.Control type="mail" id="mail" name="mail" aria-label="Recipient's username" aria-describedby="basic-addon2" placeholder="Coloca tu correo aquí" required onChange={(e) => setMail(e.target.value)} />
                                <Button id="button-addon2" variant="info" type="submit">
                                    Enviar
                                </Button>
                            </InputGroup>
                            {mailError && <InlineError error={mailError} />}

                        </Form>                        
                    </Container>
                </Modal.Body>

                {/* <Modal.Footer>
                    <Button variant="info" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer> */}
            </Modal>

        </>
    );
}

export default StaticExample;