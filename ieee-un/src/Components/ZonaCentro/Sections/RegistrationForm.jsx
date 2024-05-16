import React, { useEffect, useState } from "react";
import "../../../Styles/ZonaCentro.sass"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, FormControl, Toast, FormSelect, FormCheck } from "react-bootstrap";
import CountDown from "../Components/CountDown";
import { FiSend } from "react-icons/fi";
import InlineError from "../../InlineError";
import { validateEmail, validateFullName } from "../../utils/Validation";

export default function RegistrationForm(props) {
  const [fullName, setFullName] = useState('')
  const [mail, setMail] = useState('')

  const [mailError, setMailError] = useState();
  const [fullNameError, setFullNameError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault()
    setError(false)
    setToastMessage({
      title: "Error",
      body: "Hubo un error al enviar el formulario."
    })
    toggleShowToast()
  }
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState({
    title: "",
    body: ""
  })
  const [error, setError] = useState(false)

  useEffect(() => {
    if (showToast) {
      setTimeout(() => {
        toggleShowToast()
      }, 8000)
    }
  }, [showToast])

  useEffect(() => {
    // *********** VALIDACION CORREO ***************
    validateEmail({ mail, setMailError });
    validateFullName({ fullName, setFullNameError });
  }, [mail, fullName])

  const toggleShowToast = () => setShowToast(!showToast)

  return (
    <>
      <Container fluid as="section">
        <form onSubmit={handleSubmit} className="registration-form row align-items-center justify-content-center p-3 p-md-0 pb-md-5 gap-5">
          <Col lg={6} className="registration-formMessage pe-4">
            <div className="registration-formMessageContainer">
              <h2 id="registrationForm">
                Inscríbete
              </h2>
              <p>
                ¡No te pierdas esta oportunidad única! <br /> <br />
                {props.textoInvitacion}
              </p>
            </div>
            <CountDown day={props.day} month={props.month} year={props.year} hour={props.hour}/>
          </Col>
          <Col lg={4} className={`${props.eventName}-bg2-color form-container shadow-lg p-5 d-flex flex-column gap-4`}>
            <FormControl type="text" placeholder="Nombre Completo" required onChange={(e) => setFullName(e.target.value)} />
            {fullNameError && <InlineError error={fullNameError} />}
            <FormControl type="text" placeholder="Correo" required onChange={(e) => setMail(e.target.value)} />
            {mailError && <InlineError error={mailError} />}
            <FormControl type="text" placeholder="Universidad" required />
            <FormControl type="text" placeholder="Cargo" required />
            {/* <FormControl type="text" placeholder="" required /> */}
            <FormSelect aria-label="Default select example" required>
              <option value="Morning">Mañana (09:00 a 12:00 m)</option>
              <option value="Afternoon">Tarde (02:00 a 5:00 pm)</option>
              <option value="Both">Ambas</option>
            </FormSelect>
            <FormCheck
              inline
              label="Acepta el uso y tratamiento de los datos registrados según la ley Ley 1581 de 2012"
              name="group1"
              required
            // type={type}
            // id={`inline-${type}-1`}
            />
            <Row className="justify-content-end">
              <Button variant="outline-primary" className="d-flex gap-1 align-items-center" type="submit">
                Enviar
                <FiSend size={19} />
              </Button>
            </Row>
          </Col>
        </form>
      </Container>
      <Toast className={`toast ${error ? 'toast-error' : 'toast-success'} position-fixed bottom-0 end-0 mb-5 me-5`} show={showToast} onClose={toggleShowToast}>
        <Toast.Header>
          <strong className="me-auto">{toastMessage.title}</strong>
        </Toast.Header>
        <Toast.Body>{toastMessage.body}</Toast.Body>
      </Toast>
    </>
  );
}