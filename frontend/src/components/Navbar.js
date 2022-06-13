import React from 'react'
import logo from '../assets/logo-san.png';

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">
                    <img style={{width:"80px",height:"60px"}} src={logo} alt="Logo" />
                    </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* <form class="d-flex" role="search">
                        <div id="list-example" class="d-flex flex-direction-row justify-content-end">
                            <a class="list-group-item list-group-item-action" href="#list-item-1">Item 1</a>
                            <a class="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>
                            <a class="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
                            <a class="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>
                        </div>
                    </form> */}
                </div>
            </div>
        </nav>
    )
}
