import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg main p-2">
                <div className="container-fluid">
                    <Link className="navbar-brand color-main ps-4" to=''>
                     <h1>START FRAMEWORK</h1>   
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto mt-lg-0 mt-2 px-4">
                            <li className="nav-item">
                                <NavLink className="nav-link color-main link-nav" to='about'>About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link color-main  link-nav" to='portfolio'>Portfolio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link color-main link-nav" to='contact'>Contact</NavLink>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}
