import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { SiRollsroyce } from 'react-icons/si';
import Swal from 'sweetalert2';
import { Modal, Button } from "react-bootstrap";

import SideNavBar from '../Components/SideNavBar';
import InlineError from '../Components/InlineError';


const AdminZonaCentro = () => {
    const [dataDB, setDataDB] = useState([])
    const [id, setId] = useState("");
    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [mailError, setMailError] = useState();
    const [password, setPassword] = useState("")
    const [state, setState] = useState("")
    const [role, SetRole] = useState("")

    const getListValues = () => {
        Axios.get(`/user/list`).then((result) => {
            setDataDB(result.data);
        });
    }

    useEffect(() => {
        getListValues()
    }, []);

    const getTableHeaders = () => {
        let value = dataDB[0];
        let headers = [];
        for(let j in value){
          if (!(j in headers)){
            headers.push(j)
          }
        }
        return headers
    }
    // const headerTable = getTableHeaders()

    // const obtenerdatos = async (idp) => {
    //     modifyUser(idp)
    //     const respuesta = await Axios.get("/user/list/" + idp._id)
    //     console.log(respuesta.data)
    //     setId(respuesta.data._id);
    //     setName(respuesta.data.name)
    //     setMail(respuesta.data.mail)
    //     setPassword(respuesta.data.password)
    //     setState(respuesta.data.state)
    //     SetRole(respuesta.data.role)
    // }

    // const [modifyShow, setModifyShow] = useState(false);
    // const handleCloseModify = () => setModifyShow(false);
    // const handleShowModify = () => setModifyShow(true);

    // const [createShow, setCreateShow] = useState(false);
    // const handleCloseCreate = () => setCreateShow(false);
    // const handleShowCreate = () => setCreateShow(true);


    // const alertCreateUser = () => {
    //     Swal.fire({
    //         title: "¿Esta seguro que desea crear un nuevo capitulo?",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Si",
    //         cancelButtonText: "No",
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             // setId(item._id);
    //             // setName(item.name);
    //             // setMail(item.mail);
    //             // setState(item.state);
    //             // SetRole(item.role);
    //             handleShowCreate();
    //         }
    //     });
    // };

    // const modifyUser = (item) => {
    //     Swal.fire({
    //         title: "¿Esta seguro que desea modificar a este usuario?",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Si",
    //         cancelButtonText: "No",
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             setId(item._id);
    //             setName(item.name);
    //             setMail(item.mail);
    //             setState(item.state);
    //             console.log("item.state "+ item.state)
    //             SetRole(item.role);
    //             console.log("item.role "+ item.role)
    //             handleShowModify();
    //         }
    //     });
    // };

    // const createUser = async (e) => {
    //     e.preventDefault();
    //     const userDataUpdate = { name, mail, password, state, role }
    //     console.log("userDataUpdate "+ userDataUpdate)
    //     console.log(userDataUpdate)
    //     console.log("userDataUpdate "+ userDataUpdate)
    //     const respuesta = await Axios.post("/user/create/", userDataUpdate)
    //     const message = respuesta.data.mensaje;
    //     if (message !== "Se ha registrado correctamente") {
    //         Swal.fire({
    //             position: "center",
    //             icon: "error",
    //             title: message,
    //             showCloseButton: true,
    //             showCancelButton: false,
    //             focusConfirm: false,
    //             confirmButtonText: '<i class="fa fa-thumbs-up"></i> Aceptar!',
    //             confirmButtonAriaLabel: "Thumbs up, great!",
    //         })
    //     }
    //     else {
    //         Swal.fire({
    //             position: "center",
    //             icon: "success",
    //             title: message,
    //             showCloseButton: true,
    //             showCancelButton: false,
    //             focusConfirm: false,
    //             confirmButtonText: '<i class="fa fa-thumbs-up"></i> Aceptar!',
    //             confirmButtonAriaLabel: "Thumbs up, great!",
    //         })
    //     }
    //     getListValues();
    //     handleCloseCreate();
    // }

    // const deleteUser = (id) => {
    //     Swal.fire({
    //         title: "Esta seguro que desea eliminar esta usuario del sistema?",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Si",
    //         cancelButtonText: "No",
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             Axios.get("/user/delete/" + id).then((resultado) => {
    //                 // window.location.reload();
    //             });
    //             getListValues()
    //         }
    //     });
    // };

    // const editUser = async (e) => {
    //     e.preventDefault();
    //     const userDataUpdate = { id, name, mail, state, role }
    //     console.log("userDataUpdate "+ userDataUpdate)
    //     const respuesta = await Axios.put("/user/update/" + id, userDataUpdate, {

    //     })
    //     const message = respuesta.data.mensaje;
    //     if (message !== "Usuario actualizado") {
    //         Swal.fire({
    //             position: "center",
    //             icon: "error",
    //             title: message,
    //             showCloseButton: true,
    //             showCancelButton: false,
    //             focusConfirm: false,
    //             confirmButtonText: '<i class="fa fa-thumbs-up"></i> Aceptar!',
    //             confirmButtonAriaLabel: "Thumbs up, great!",
    //         })
    //     }
    //     else {
    //         Swal.fire({
    //             position: "center",
    //             icon: "success",
    //             title: message,
    //             showCloseButton: true,
    //             showCancelButton: false,
    //             focusConfirm: false,
    //             confirmButtonText: '<i class="fa fa-thumbs-up"></i> Aceptar!',
    //             confirmButtonAriaLabel: "Thumbs up, great!",
    //         })
    //     }
    //     getListValues();
    //     handleCloseModify();
    // }

    return (
        <>
            <SideNavBar />
            <div className="container">
                <h1>Zona Centro</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur placerat felis nec gravida. Praesent ligula felis, pellentesque feugiat odio et, imperdiet iaculis risus. Proin luctus massa libero, sit amet ultricies quam rutrum vitae. Cras placerat nunc sit amet molestie ultrices. Fusce non justo a tortor euismod semper. Nam viverra nec ligula sed euismod. Mauris in ante quis odio blandit viverra. Mauris ultrices risus eget mollis fermentum. Donec a mauris lacinia erat condimentum ultrices auctor accumsan felis.</p>

                <div>
                    <h3>Crear un nuevo usuario</h3>
                    {/* <button 
                    className="btn btn-primary"
                    onClick={(e) => alertCreateUser()}
                    >Crear</button> */}
                </div>

                
                {/* <table className="table table-responsive-md">
                    <thead className="table-primary">
                        <tr>
                            {headerTable.map((item) => <th key={item.toUpperCase()}>{item.toUpperCase()}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {dataDB.map((item, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.mail}</td>
                                <td>{item.state}</td>
                                <td>{item.role}</td>

                                <td>
                                    <button className="btn btn-warning" onClick={(e) => obtenerdatos(item)}>Modificar</button>
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={(e) => deleteUser(item._id)}
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table> */}

            </div>
        </>
    )
}

export default AdminZonaCentro