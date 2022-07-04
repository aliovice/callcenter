import React from 'react'
import logo from '../assets/logo-san.png';
import { Link } from 'react-router-dom'
import { FaBeer } from 'react-icons/fa';

export default function Navbar({btnTitle,btnLink,onClick,icon}) {
    return (
        <nav class="navbar bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">
                    <img style={{ width: "150px", height: "60px", borderRadius: "20px", backgroundColor: "#00b8d5" }} src={logo} alt="Logo" />
                </a>
                <form class="d-flex" role="search">
                    <Link to={btnLink} class="btn btn-light" onClick={onClick} type="submit">
                        
                    {icon} <b>{btnTitle}</b></Link>
                </form>
            </div>
        </nav>

    )
}
