import React, { Component } from 'react'
import axios from 'axios';
import slide1 from "../assets/slide1.jpg"
import slide2 from "../assets/slide2.jpg"
import slide3 from "../assets/slide3.jpg"
import { Link } from "react-router-dom"

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
            sr: true
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
                <div className="container-fluid">
                  
                    <div class="row">
                        <div className='col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12'>
                            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    {/* <div class="carousel-item active">
                                        <img src={slide1} style={{display:"block",width:1200,height:600}} alt="slide pic1" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={slide2} style={{display:"block",width:1200,height:600}} alt="slide pic2" />
                                    </div> */}
                                    <div class="carousel-item active">
                                        <img src={slide1} style={{display:"block",width:1200,height:600}} alt="slide pic3" />
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12 mt-5'>
                            <div className='h2 d-flex justify-content-center'>Make your search</div>
                            <div class="input-group mt-4">
                                <span className="input-group-text" id="inputGroup-sizing-default">Region</span>
                                <input type="text" value={this.state.region} onChange={this.handleChange} class="form-control"
                                    aria-label="Sizing example input" name="region"
                                    aria-describedby="inputGroup-sizing-default" />
                            </div>
                            <div className="input-group mt-4">
                                <label className="input-group-text" for="inputGroupSelect01">Choose Gender</label>
                                <select onChange={this.handleChange} value={this.state.sex} name="sex" class="form-select"
                                 id="inputGroupSelect01">
                                   
                                    <option defaultValue={this.state.sex} value="M">M</option>
                                    <option value="F">F</option>
                                </select>
                            </div>
                            <div className="input-group mt-4">
                                <span className="input-group-text" id="inputGroup-sizing-default">Date</span>
                                <input type="date" name="date" onChange={this.handleChange} className="form-control"
                                    aria-label="Sizing example input" value={this.state.date}
                                    aria-describedby="inputGroup-sizing-default" />
                            </div>

                            <div className="input-group mt-4">
                                <Link type="button" className={this.state.region !== "" && this.state.sex !== "" ? "btn btn-success":"btn btn-success disabled"} disabled
                                    style={{ width: "140px", margin: "20px auto" }}
                                    to='/offers'
                                    state={{
                                        state: this.state
                                    }}>
                                    Calculate
                                </Link>
                            </div>

                        </div>



                    </div>
     
               
                    <div class="row mt-5">

                        {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            CONTACTER NOUS
                        </button> */}


                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        {this.state.id}
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>  
                          </div>
                 
                </div>
            </>
        )
    }
}
