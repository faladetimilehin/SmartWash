import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
return(
    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
    <h5 class="my-0 mr-md-auto font-weight-normal">Smart Wash</h5>
    <nav class="my-2 my-md-0 mr-md-3">
        <NavLink className="p-2 text-dark" to="/home">Home</NavLink>
        <NavLink className="p-2 text-dark" to="/about">About</NavLink>
        <NavLink className="p-2 text-dark" to="#">Services</NavLink>
        <NavLink className="p-2 text-dark" to="/contact">Contact</NavLink>
    </nav>
    <a class="btn btn-outline-primary" href="/login">Login</a>
</div>
)
 
}

export default Navbar;