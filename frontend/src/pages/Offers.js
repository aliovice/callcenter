import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from "axios"
import swal from 'sweetalert'
import contract from "../assets/contract.png"
import info from "../assets/info.png"
import Offer from '../components/Offer'



export default function Offers() {

    const [id, setId] = useState("");
    const [execute, setExecute] = useState(false);
    // const [thisYear, setThisYear] = useState("");
    // const [calcul, setCalcul] = useState("");
    // const [full_name, setFull_name] = useState("");
    // const [phone, setPhone] = useState("");
    // const [adress, setAdress] = useState("");
    // const [date, setDate] = useState("");
    const [datacontract, setDatacontract] = useState([]);
    const [birth_day, setBirth_day] = useState('');
    const [formFields, setFormFields] = useState(useLocation.formFields);

    const [values, setValues] = useState({
        full_name: "",
        phone: "",
        adress: "",
        date: "",
        current_company: "",
        prix: "",
        id: ''
    });
    const location = useLocation()

    useEffect(() => {
        // {
        //     {
        //         location.state.formFields.map(item => {
        //             setBirth_day(item.birth_day)
        //         })
        //     }
        // }
        // if (execute === true) {
        //     axios.get(`http://localhost:5000/api/v1/companys/${id}`).then(res => {
        //         console.log(res.data)
        //         setDatacontract(res.data)
        //     }).catch(err => {
        //         console.log(err)
        //     })
        // }
        // var currentDate = new Date();
        // var currentYear = currentDate.getFullYear();
        // setThisYear(currentYear)
        // console.log(currentYear);

        // var theDate = new Date(state.date)
        // var age = theDate.getFullYear();
        // setCalcul(age)
        // console.log(age);


        axios.get('http://localhost:5000/api/v1/companys').then(res => {
            console.log(res.data)
            setDatacontract(res.data)
        }).catch(err => {
            console.log(err);
        })

    }, [id]);



    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });

    }


    const sendContract = () => {
        const Alldata = {
            adress: values.adress,
            current_company: values.current_company,
            date: values.date,
            full_name: values.full_name,
            id,
            phone: values.phone,
            prix: values.prix,
        }
        axios.post("http://localhost:5000/api/v1/contract", Alldata).then(res => {
            // setDatacontract(res.data)
            console.log(res)
            if (res.data.message) {
                swal({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })
            } else {
                swal({
                    title: "Message",
                    text: "Your request has ben sent!",
                    icon: "success",
                });
            }

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

    // const calculAge = () => {
    //     var currentDate = new Date();
    //     var currentYear = currentDate.getFullYear();
    //     setThisYear(currentYear)
    //     console.log(currentYear);

    //     var theDate = new Date(state.date)
    //     var age = theDate.getFullYear();
    //     setCalcul(age)
    //     console.log(age);

    // console.log(currentDate - age)
    // }



    const { state } = location
    console.log(state)
    console.log(state.dt)
    console.log(state.formFields.birth_day)
    console.log(id)
    return (
        <>
            <div className='container'>
                <div className="h1 d-flex justify-content-center m-4">The offers</div>
                <div className="row">

                    {state.state !== "" ? datacontract.filter(campany =>
                          campany.date > state.dt.date 
                          && campany.region === state.dt.region
                    ).map(filteredCompanys => (

                        <>
                            <div className='col-6  mt-4'>
                                
                                <div class="card w-75" key={filteredCompanys._id}>
                                    <div class="card-body">
                                    <h3>{state.full_name1}</h3>
                                        <h5 class="card-title  d-flex justify-content-between">
                                            <span>{filteredCompanys.name}</span>
                                            <span>{filteredCompanys.region}</span>
                                        </h5>
                                        <p class="card-text d-flex justify-content-around">
                                            <h3>{filteredCompanys.tarif} </h3>
                                            <span>Net premium CHF / month</span>
                                        </p>
                                        <a class="btn btn-outline-primary" onClick={() => setId(filteredCompanys._id)}
                                            data-bs-toggle="modal" data-bs-target="#exampleModal"
                                        >
                                            this offer it's ok for me</a>
                                    </div>
                                </div>
                            </div>
                        </>


                    )) : <p>no resultat</p>}




                    {/* ------------------------------ seconde person -----------------------------------------*/}
                    {/* <Offer state={state.data} state1={state.formFields} datacontract={datacontract} /> */}
                                
                    {state.formFields.map(it => (
                        <p>{it.birth_day.length > 1 ? datacontract.filter(campany =>
                            campany.date > it.birth_day
                            && campany.region == state.region
                        ).map(filteredCompanys => (
                        <>
                           <div className='col-6  mt-4'>
                          
                                <div class="card w-75" key={filteredCompanys._id}>
                                    <div class="card-body">
                                    <h3>{it.full_name}</h3>
                                        <h5 class="card-title  d-flex justify-content-between">
                                            <span>{filteredCompanys.name}</span>
                                            <span>{filteredCompanys.region}</span>
                                        </h5>
                                        <p class="card-text d-flex justify-content-around">
                                            <h3>{filteredCompanys.tarif} </h3>
                                            <span>Net premium CHF / month</span>
                                            <span>{filteredCompanys.full_name} </span>
                                        </p>
                                        <a class="btn btn-outline-primary" onClick={() => setId(filteredCompanys._id)}
                                            data-bs-toggle="modal" data-bs-target="#exampleModal"
                                        >
                                            this offer it's ok for me</a>
                                    </div>
                                </div>
                            </div>
                        </>
                           
                        )) : ''}</p>
                    ))}
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


                                        <div className="card" style={{ width: "10rem" }}>
                                            <img className="card-img-top" style={{ width: "10rem", height: "8rem" }} src={contract} alt="Card image cap" />
                                            <div className="card-body">
                                                <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModalLabelContract">
                                                    i want to make a deal
                                                </button>
                                            </div>
                                        </div>



                                    </div>
                                    <div className='col-lg-6 col-md-6'>

                                        <div className="card" style={{ width: "10rem" }}>
                                            <img className="card-img-top" style={{ width: "10rem", height: "8rem", display: "block" }} src={info} alt="Card image cap" />
                                            <div className="card-body">
                                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalLabelInformation">
                                                    i want more information
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="modal-footer">

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
                                <div class="row">

                                    <div className='col'>
                                        <label for="" className="form-label">Your Current company </label>
                                        <input type="text" onChange={handleChange}
                                            className="form-control" name="current_company" value={values.current_company} aria-describedby="helpId" placeholder="" />
                                    </div>
                                    <div className='col'>
                                        <label for="" className="form-label">Prix </label>
                                        <input type="text" onChange={handleChange}
                                            className="form-control" name="prix" value={values.prix} aria-describedby="helpId" placeholder="" />
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

