import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import swal from 'sweetalert'

export default function Register() {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    })


    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    }
    const handleCreate = (e) => {
        e.preventDefault()
        // const obj = { values }
        axios.post('http://localhost:5000/api/v1/users/register', values).then(res => {
            console.log(res);
            if(res.status === 201){
                swal({
                    title: "Message",
                    text: "Your account has ben create !",
                    icon: "success",
                });
                setValues({
                    name: '',
                    email: '',
                    password: ''
                })
            }
        })
        // .catch(error){
        //     console.log(error)
        // }
    }

    console.log(values)

    return (
        <><Navbar btnLink='' btnTitle='' />
        <div className='conatiner-fluid'>
            <div className="row">
                <div className="col-lg-2 col-md-2">

                </div>
                <div className="col-lg-8 col-md-8 d-flex justify-content-center align-items-center">
                    <div className="card" style={{ width: '30rem', marginTop: '5rem' }}>
                        <div className="row">
                            <div className="col-10 mt-5">
                                <div className="card-body">
                                    <h5 className="card-title d-flex justify-content-center">Register</h5>


                                    <div className="input-group input-group-lg mt-3 mb-3">

                                        <input type="text" className="form-control" aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-lg" placeholder='Name'
                                            onChange={handleChange} value={values.name} name='name' />
                                    </div>
                                    <div className="input-group input-group-lg mt-3 mb-3">

                                        <input type="email" className="form-control" aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-lg" placeholder='Email'
                                            onChange={handleChange} value={values.email} name='email' />
                                    </div>

                                    <div className="input-group input-group-lg mb-3">

                                        <input type="password" className="form-control" aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-lg" placeholder='Password'
                                            onChange={handleChange} value={values.password} name='password' />
                                    </div>



                                    <div className="input-group input-group-lg mb-5 d-flex justify-content-center">

                                        <button onClick={handleCreate} className="btn btn-info btn-sm" role="button"> Create</button>
                                    </div>
                                    <div className="input-group input-group-lg d-flex justify-content-end">

                                        <Link to='/login'>login</Link>
                                    </div>

                                </div>
                            </div>
                            <div className="col-2" style={{ backgroundColor: "#00b8d5" }}>

                            </div>
                        </div>




                    </div>
                </div>
                <div class="col-lg-2 col-md-2">

                </div>
            </div>
        </div></>
    )
}
