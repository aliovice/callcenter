import React,{useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import axios from "axios"

export default function Test() {

    const [datacontract, setDatacontract] = useState({});
    const location = useLocation()
    console.log(location)

    useEffect(() => {
            axios.get(`http://localhost:5000/api/v1/companys/${location.state.id}`).then(res => {
                console.log(res.data)
                setDatacontract(res.data)

            }).catch(err => {
                console.log(err)
            })
       
    }, [location.state.id]);

    console.log(datacontract)

    return (
        <div className='conatianer'>
            <div class="row">
              <div class="col  ">
              {datacontract.name}
           </div>
           <div class="col  ">
           {datacontract.sex}
           </div>
           <div class="col  ">
           {datacontract.tarif}
           </div>  
            </div>
           
                  
                  
                 
        
        </div>
    )
}
