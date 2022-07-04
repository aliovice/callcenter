import React, { Component } from 'react'
import axios from 'axios';
import Navbar from '../components/Navbar';
import slide2 from "../assets/slide2.jpg"
import img from "../assets/img.jpg"
import { Link } from "react-router-dom"
import { FaFacebook,  FaGoogle, FaInstagram, FaSign, FaTwitter } from 'react-icons/fa';
import background from '../assets/bbg.jpg'
// import { GrUserFemale } from 'grommet-icons';

// function setToken(userToken) {
// }

// function getToken() {
// }

export default class Home extends Component {
    

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            region: "",
            sex: "M",
            data: [],
            st: false,
            id: "",
            show: false,
            date: "",
            sr: true,
            qt_pers: ''
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });

    }

    componentDidMount = () => {
        this.getData()
    }

    getData = (e) => {

        axios.get('http://localhost:5000/api/v1/companys').then(res => {
            console.log(res.data)
            this.setState({ data: res.data });
        }).catch(err => {
            console.log(err);
        })
    }


    render() {
        console.log(this.state)
        return (
            <>
                <Navbar btnLink='/login' btnTitle='Login' icon={<FaSign />} />
                <div className="container-fluid">

                    <div class="row">
                        <div className='col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12'
                        // style={{
                        //     backgroundImage: `url(${img})`
                        //     , backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "750px"
                        // }}
                        >
                            <figure className="figure">
                                <img src={img} class="figure-img img-fluid rounded" alt="home-pic" />

                            </figure>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>



                            <div class="card" style={{
                                marginRight: "40px",
                                marginTop: "40px",
                                border: "solid",
                                borderColor: "#01B8D5",
                                backgroundColor: "#01B8D5", borderRadius: "50px"
                            }}>
                                <div class="card-body">
                                    <h1 class="card-title d-flex justify-content-center" style={{ color: "#fff" }} >CALCULER LA PRIME</h1>

                                    <div class="input-group input-group-lg mt-4">
                                        {/* <span className="input-group-text" id="inputGroup-sizing-default">Region</span> */}
                                        <input placeholder='Region / Localité' type="text" value={this.state.region} onChange={this.handleChange} class="form-control"
                                            aria-label="Large" name="region" style={{ backgroundColor: "#00b8d5" }}
                                            aria-describedby="inputGroup-sizing-default" />
                                    </div>
                                    <div className="input-group input-group-lg mt-4">
                                        {/* <label className="input-group-text" for="inputGroupSelect01">Choose Gender</label> */}
                                        <select onChange={this.handleChange} value={this.state.sex} name="sex" class="form-select"
                                            id="inputGroupSelect01" style={{ backgroundColor: "#00b8d5" }}>

                                            <option defaultValue={this.state.sex} value="M">M</option>
                                            <option value="F">F</option>
                                        </select>
                                    </div>
                                    {/* <div class="input-group input-group-lg mt-4">
                                         <span className="input-group-text" id="inputGroup-sizing-default">Region</span> 
                                        <input placeholder='Nombre des Personne' type="number" value={this.state.qt_pers}
                                            onChange={this.handleChange} class="form-control"
                                            aria-label="Large" name="qt_pers" style={{ backgroundColor: "#00b8d5" }}
                                            aria-describedby="inputGroup-sizing-default" />
                                    </div> */}
                                     {/* <div class="input-group input-group-lg mt-4">
                                        <div style={{height:'40px', width:'40px', border:'solide',borderColor:'#000'}}>
                                            </div>
                                       
                                    </div> */}
                                    <div className="input-group input-group-lg mt-4">
                                        {/* <span className="input-group-text" id="inputGroup-sizing-default">Birth-Date</span> */}
                                        <input type="date" name="date" onChange={this.handleChange} className="form-control"
                                            aria-label="Large" value={this.state.date} style={{ backgroundColor: "#00b8d5" }}
                                            aria-describedby="inputGroup-sizing-default" />
                                    </div>

                                    <div className="input-group mt-4">
                                        <Link type="button" className={this.state.region !== "" && this.state.sex !== "" ? "btn btn-success" : "btn btn-success disabled"} disabled
                                            style={{ width: "140px", margin: "20px auto" }}
                                            to='/AddPersone'
                                            state={{
                                                state: this.state
                                            }}>
                                            Calculate
                                        </Link>
                                    </div>


                                </div>
                            </div>




                            {/* <div className='h2 d-flex justify-content-center'>Make your search</div> */}


                        </div>
                    </div>


                    <div class="row"
                    // style={{ backgroundImage: `url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")` }}

                    >
                        <h1 className='d-flex justify-content-center m-5'> Qu'est-ce qui vous intéresse ?</h1>
                        <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center'>

                            {/* <div class="card" style={{ width: "18rem" }}>
                                <img class="card-img-top" src={ser1} alt="Card image cap" />
                                <div class="card-body">
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        CONTACTER NOUS
                                    </button>
                                </div>
                            </div> */}



                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center'>

                            <div class="card">
                                <img class="card-img-top" src={slide2} alt="Card image cap" />
                                <div class="card-body  d-flex justify-content-center">
                                    <button type="button" className="btn btn-primary"
                                        data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        CONTACTER NOUS
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                            {/* <div class="card" style={{ width: "18rem" }}>
                                <img class="card-img-top" src={slide3} alt="Card image cap" />
                                <div class="card-body">
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        CONTACTER NOUS
                                    </button>
                                </div>
                            </div> */}
                        </div>



                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Contacter nous</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <h3>numero de tele : <span>05 3535353535</span></h3>
                                        <h3>Adress : <span>bouznika city</span></h3>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row'>

                        <div class="container my-5">
                            <footer class="text-center text-white" style={{ backgroundColor: "#00b8d5" }}>
                                <div class="container">
                                    <section class="mt-5">
                                        <div class="row text-center d-flex justify-content-center pt-5">
                                            <div class="col-md-2">
                                                <h6 class="text-uppercase font-weight-bold">
                                                    <a href="#!" class="text-white">About us</a>
                                                </h6>
                                            </div>
                                            <div class="col-md-2">
                                                <h6 class="text-uppercase font-weight-bold">
                                                    <a href="#!" class="text-white">Products</a>
                                                </h6>
                                            </div>
                                            <div class="col-md-2">
                                                <h6 class="text-uppercase font-weight-bold">
                                                    <a href="#!" class="text-white">Awards</a>
                                                </h6>
                                            </div>
                                            <div class="col-md-2">
                                                <h6 class="text-uppercase font-weight-bold">
                                                    <a href="#!" class="text-white">Help</a>
                                                </h6>
                                            </div>
                                            <div class="col-md-2">
                                                <h6 class="text-uppercase font-weight-bold">
                                                    <a href="/contact" class="text-white">Contact</a>
                                                </h6>
                                            </div>
                                        </div>
                                    </section>
                                    <hr class="my-5" />
                                    <section class="mb-5">
                                        <div class="row d-flex justify-content-center">
                                            <div class="col-lg-8">
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                                                    distinctio earum repellat quaerat voluptatibus placeat nam,
                                                    commodi optio pariatur est quia magnam eum harum corrupti
                                                    dicta, aliquam sequi voluptate quas.
                                                </p>
                                            </div>
                                        </div>
                                    </section>

                                    <section class="text-center mb-5">
                                        <a href="" class="text-white me-4">
                                            <FaFacebook />
                                        </a>
                                        <a href="" class="text-white me-4">
                                            <FaTwitter />
                                        </a>
                                        <a href="" class="text-white me-4">
                                            <FaGoogle />
                                        </a>
                                        <a href="" class="text-white me-4">
                                            <FaInstagram />
                                        </a>

                                    </section>
                                </div>
                                <div
                                    class="text-center p-3"
                                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                                >
                                    {/* © 2020 Copyright: */}
                                    <a class="text-white" href="https://contact@san.com/"
                                    >contact@san.com</a>
                                </div>
                            </footer>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}
