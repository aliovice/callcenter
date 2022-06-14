import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from "axios"
import swal from 'sweetalert'
import contract from "../assets/contract.png"
import info from "../assets/info.jpg"


export default function Offers() {

    const [id, setId] = useState("");
    const [execute, setExecute] = useState(false);
    // const [full_name, setFull_name] = useState("");
    // const [phone, setPhone] = useState("");
    // const [adress, setAdress] = useState("");
    // const [date, setDate] = useState("");
    const [datacontract, setDatacontract] = useState([]);
    const [values, setValues] = useState({
        full_name: "",
        phone: "",
        adress: "",
        date: ""
    });
    const location = useLocation()

    useEffect(() => {

        if (execute === true) {
            axios.get(`http://localhost:5000/api/v1/companys/${id}`).then(res => {
                console.log(res.data)
                setDatacontract(res.data)

            }).catch(err => {
                console.log(err)
            })
        }
    }, [id]);

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });

    }


    const sendContract = () => {
        axios.post("http://localhost:5000/api/v1/contract", values).then(res => {
            // setDatacontract(res.data)
            console.log(res.data)
            swal({
                title: "Message",
                text: "Your request has ben sent!",
                icon: "success",
            });
        }).catch(err => {
            console.log(err)
        })

    }
    const sendInformation = () => {
        axios.post("http://localhost:5000/api/v1/information", values).then(res => {
            // setDatacontract(res.data)
            console.log(res.data)
            swal({
                title: "Message",
                text: "Your request has ben sent!",
                icon: "success",
            });

        }).catch(err => {
            console.log(err)
        })

    }



    const { state } = location.state
    console.log(datacontract)
    console.log(id, execute)
    return (
        <>
            <div className='container'>
                <div class="h1 d-flex justify-content-center m-4">The offers</div>
                <div className="row">
                    <table class="table  table-dark table-borderless">
                        <thead>
                            <tr>
                                <th scope="col">Company</th>
                                <th scope="col">Region</th>
                                <th scope="col">Sex</th>
                                <th scope="col">Trif</th>
                                <th scope="col">#</th>
                            </tr>
                        </thead>


                        {state.data !== "" ? state.data.filter(campany =>
                            campany.region === state.region
                            && campany.sex === state.sex
                            && campany.date < state.date
                        ).map(filteredCompanys => (

                            <> {<tbody key={filteredCompanys._id}>
                                <tr onClick={() => {
                                    setExecute(true);
                                    setId(filteredCompanys._id)
                                }}>
                                    {/* <tr onClick={() => getInfo()}> */}
                                    <th scope="row">{filteredCompanys.name}</th>
                                    <td>{filteredCompanys.region}</td>
                                    <td>{filteredCompanys.sex}</td>
                                    <td>{filteredCompanys.tarif}</td>
                                    <td>
                                        <button type="button" class="btn btn-primary"
                                            data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            this offer it's ok for me
                                        </button>
                                    </td>
                                </tr>

                            </tbody>

                            }</>

                        )) : <p>no resultat</p>}
                    </table>
                </div>


                {/*-------------------------------------------------------------- first modal -------------------------------------------------------*/}

                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Next step</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className='container mt-5'>
                                <div className='row'>
                                    <div className='col-lg-6 col-md-6'>


                                        <div className="card" style={{width: "10rem"}}>
                                             <img className="card-img-top" style={{width: "10rem",height:"8rem"}}  src={contract} alt="Card image cap" /> 
                                            <div className="card-body">
                                                <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModalLabelContract">
                                                    i want to make a deal
                                                </button>
                                            </div>
                                        </div>



                                    </div>
                                    <div className='col-lg-6 col-md-6'>

                                        <div className="card" style={{width: "10rem"}}>
                                             <img className="card-img-top" style={{width: "10rem",height:"8rem",display: "block"}} src={info} alt="Card image cap" />
                                            <div className="card-body">
                                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalLabelInformation">
                                                    i want more information
                                                </button>
                                            </div>
                                        </div>



                                        {/* <ul>
                                             {datacontract.map(it => 
                                                {it._id === id ?  <li>{it.name}{it.tarif}{it.sex}</li>
                                            :""}
                                               
                                            )} 
                                        </ul> */}
                                    </div>
                                </div>
                            </div>
                            {/* <div class="modal-body">
                                {id}
                                {datacontract.name}
                            </div> */}
                            <div className="modal-footer">
                                {/* <Link to="/test" state={{id}}
                                type="button" className="btn btn-secondary">Close</Link> */}

                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                            </div>
                        </div>
                    </div>
                </div>
                {/*-------------------------------------------------------------- End of first modal -------------------------------------------------------*/}

                {/*-------------------------------------------------------------- contract modal -------------------------------------------------------*/}

                <div className="modal fade" id="exampleModalLabelContract" tabindex="-1" aria-labelledby="exampleModalLabelContract" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Complete the formular</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className='container mt-5'>
                                <div className='row'>
                                    <div className='col'>

                                        <div className="mb-3">
                                            <label className="form-label">Full Name</label>
                                            <input type="text" onChange={handleChange}
                                                className="form-control" name="full_name" value={values.full_name} aria-describedby="helpId" placeholder="" />
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <label for="" className="form-label">Date</label>
                                        <input type="date" onChange={handleChange}
                                            className="form-control" name="date" value={values.date} aria-describedby="helpId" placeholder="" />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <label for="" className="form-label">Phone number</label>
                                        <input type="text" onChange={handleChange}
                                            className="form-control" name="phone" value={values.phone} aria-describedby="helpId" placeholder="" />
                                    </div>
                                    <div className='col'>
                                        <label for="" className="form-label">Adress</label>
                                        <input type="text" onChange={handleChange}
                                            className="form-control" name="adress" value={values.adress} aria-describedby="helpId" placeholder="" />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer mt-5">
                                {/* <button type="button" className="btn btn-secondary" >Close</button> */}
                                <button onClick={sendContract} type="button" data-bs-dismiss="modal" className="btn btn-primary">Send</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/*-------------------------------------------------------------- End contract modal -------------------------------------------------------*/}

                {/*-------------------------------------------------------------- asking information modal -------------------------------------------------------*/}

                <div className="modal fade" id="exampleModalLabelInformation" tabindex="-1" aria-labelledby="exampleModalLabelInformation" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Complete the formular</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className='container mt-5'>
                                <div className='row'>
                                    <div className='col'>

                                        <div className="mb-3">
                                            <label for="" className="form-label">Full Name</label>
                                            <input type="text" onChange={handleChange}
                                                className="form-control" name="full_name" value={values.full_name}
                                                aria-describedby="helpId" placeholder="" />

                                        </div>

                                    </div>
                                    <div className='col'>

                                        <label for="" className="form-label">Phone</label>
                                        <input type="text" onChange={handleChange}
                                            className="form-control" name="phone" value={values.phone}
                                            aria-describedby="helpId" placeholder="" />

                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <label for="" className="form-label">Date to call you</label>
                                        <input type="date" onChange={handleChange}
                                            className="form-control" name="date" value={values.date}
                                            aria-describedby="helpId" placeholder="" />

                                    </div>

                                    <div className='col'>
                                        <label for="" className="form-label">Adress</label>
                                        <input type="text" onChange={handleChange}
                                            className="form-control" name="adress" value={values.adress} aria-describedby="helpId" placeholder="" />


                                    </div>
                                </div>
                            </div>

                            <div className="modal-footer mt-5">
                                {/* <button type="button" className="btn btn-secondary" >Close</button> */}
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={sendInformation}>Send</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/*-------------------------------------------------------------- End asking information modal -------------------------------------------------------*/}

            </div>

        </>
    )
}

