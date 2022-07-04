import React from 'react'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
// import swal from 'sweetalert'
// import { useNavigate } from 'react-router-dom';
export default function Request() {
    // const nav = useNavigate();

    const handlelogOut = () => {
        localStorage.removeItem('token')
        // localStorage.getItem('token');
        // localStorage.clear()
        window.location.href = '/'

    }


    return (
        <div>
        {!localStorage.token ? '' :
        <>
            <Navbar btnLink='' btnTitle='logOut' onClick={handlelogOut} />
            <div className='container'>
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <h3 className='d-flex justify-content-center'>Asking For a Deal</h3>
                        <Card title='Request 1' subject='Make a deal' />
                        <Card title='Request 2' subject='Make a deal' />

                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <h3 className=' d-flex justify-content-center'>Asking For a Information</h3>
                        <Card title='Appointment 1' subject='more information' />
                        <Card title='Appointment 2' subject='more information' />
                        <Card title='Appointment 3' subject='more information' />
                    </div>
                </div>
            </div> </>}
       </div>    
    )
}
