import axios from 'axios';
import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './style.css'
class contactez extends Component {

    constructor(props) {
        super()
        this.state = {
            nom: '',
            prenom: '',
            adress: '',
            ville: '',
            phone: '',
            startDate: new Date(),
            data: ''
        }
    }

    // componentDidMount(){
    //     axios.get('http://line.mytv-top.com/get.php?username=700470041&password=UEJDH1X7AO&type=m3u_plus&output=mpegts').then(res=>{
    //         console.log(res)
    //     })
    // }

    hnadleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    sendData = () => {
        const info = {
            nom: this.state.nom,
            prenom: this.state.prenom,
            adress: this.state.adress,
            ville: this.state.ville,
            phone: this.state.phone,
            date: this.state.startDate
        }
        axios.post('/api/v1/contracts', info).then(res => {
            this.setState({
                data: res.data,
                nom: '',
                prenom: '',
                adress: '',
                ville: '',
                phone: '',
                date: ''
            })
            
        }).catch(err => {
            console.warn(err)
        })
    }

    render() {
        console.log(this.state)
        return (
            <>
                <nav>
                    <ul className="nav justify-content-center">

                        <li className="nav-item">
                            <a className="nav-link"><h2>SAN</h2></a>
                        </li>
                    </ul>
                </nav>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className="card border-success mb-3 " style={{ maxWidth: '58rem' }}>
                            <div className="card-header bg-transparent border-success">Formular</div>
                            <div className="card-body text-success">
                                <div className="row ">
                                    <div className="col">
                                        <input onChange={this.hnadleChange} name='nom' value={this.state.nom} type="text" className="form-control"
                                            placeholder="Nom" aria-label="First name" />
                                    </div>
                                    <div className="col">
                                        <input onChange={this.hnadleChange} name='prenom' value={this.state.prenom} type="text" className="form-control"
                                            placeholder="prenom" />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <input onChange={this.hnadleChange} name='phone' value={this.state.phone} type="number" className="form-control"
                                            placeholder="Numero telephone" aria-label="" />
                                    </div>
                                    <div className="col">
                                        <input onChange={this.hnadleChange} name='adress' type="text" className="form-control"
                                            placeholder="adress" />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <input onChange={this.hnadleChange} name='ville' value={this.state.ville} type="text" className="form-control"
                                            placeholder="ville" />
                                    </div>
                                    <div className="col">
                                        <DatePicker name='startDate' className="form-control"
                                            // onSelect={handleDateSelect} when day is clicked
                                            // dateFormat="Pp" to display time in input to
                                            selected={this.state.startDate} onChange={(date) => this.setState({ startDate: date })} />
                                    </div>
                                </div>
                                <div className="row mt-3">


                                </div>

                            </div>
                            <div className="card-footer bg-transparent border-success">
                                <div className="row">
                                    <div className="col">
                                        <input type="button" value='cancel' className="form-control bg-danger" />
                                    </div>
                                    <div className="col">
                                        <input onClick={this.sendData} type="button" value='send' className="form-control bg-success" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </>
        );
    }
}


{/* <script type="text/javascript">
    $(function() {
        $('#datepicker').datepicker()
    })
</script> */}

export default contactez;