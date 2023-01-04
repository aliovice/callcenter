import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({title,subject,btnClick,state,phone,adress,onClick,btnStyle,btnLabel}) {
    return (
        <>
            <div className="card border-success text-white mb-3 bg-dark mt-3">
                <div className="card-header">
                {title} -- {phone}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{subject}</h5>
                    <h5 className="card-title">{adress}</h5>
                    {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                    <Link className="btn btn-primary"  to={btnClick} 
                    state={state} 
                    >Take it</Link>
                    <button className={btnStyle} onClick={onClick}>{btnLabel}</button>
                </div>
            </div>
        </>
    )
}
