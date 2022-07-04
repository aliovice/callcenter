import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
// import PropTypes from 'prop-types';

export default function Login({ setToken }) {
    const nav = useNavigate();
    // const [token, setToken] = useState('')
    const [values, setValues] = useState({
        email: '',
        password: ''
    })


    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    }

    const handleLogin = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/v1/users/login', values).then(res => {
            console.log(res)

            if (res.data.token) {
                localStorage.setItem('token', res.data.token)
                nav('/request')
            }
        })
    }


    console.log(values)

    return (
        <>
            <Navbar btnLink='' btnTitle='' />
            <div className='conatiner-fluid'>
                <div class="row">
                    <div class="col-lg-2 col-md-2">

                    </div>
                    <div class="col-lg-8 col-md-8 d-flex justify-content-center align-items-center">
                        <div class="card" style={{ width: '30rem', marginTop: '5rem' }}>
                            <div class="row">
                                <div class="col-10 mt-5">
                                    <div class="card-body">
                                        <h5 class="card-title d-flex justify-content-center">Login</h5>


                                        <div class="input-group input-group-lg mt-5 mb-5">

                                            <input type="email" class="form-control" aria-label="Sizing example input"
                                                aria-describedby="inputGroup-sizing-lg" placeholder='Email'
                                                onChange={handleChange} value={values.email} name='email' />
                                        </div>

                                        <div class="input-group input-group-lg mb-5">

                                            <input type="password" class="form-control" aria-label="Sizing example input"
                                                aria-describedby="inputGroup-sizing-lg" placeholder='Password'
                                                onChange={handleChange} value={values.password} name='password' />
                                        </div>
                                        <div class="input-group input-group-lg mb-5 d-flex justify-content-center">

                                            <button onClick={handleLogin} class="btn btn-info btn-sm" role="button"> submit</button>
                                        </div>
                                        <div class="input-group input-group-lg d-flex justify-content-end">

                                            <Link to='/register'>create acount</Link>
                                        </div>

                                    </div>
                                </div>
                                <div class="col-2" style={{ backgroundColor: "#00b8d5" }}>

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
// Login.propTypes = {
//     setToken: PropTypes.func.isRequired
//   }