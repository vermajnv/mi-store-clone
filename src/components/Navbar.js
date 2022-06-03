import React from 'react'
import '../styles/Navbar.css'
import {Link} from 'react-router-dom'
import * as data from '../data/data.json'
import {search} from '../icons/icons.js'

let dataMutate = data;
const Navbar = () => {
    return (
        <div className="nav">
            <div className="logo">
                <Link to="/asd" className="navLinks">
                    <img id="logoImage" src={dataMutate.logo} alt="Not Fount"/>
                </Link>
            </div>
                <Link className="navLinks" to="/hi">Mi Phones</Link>
                <Link className="navLinks" to="/Hello">Redmi Phones</Link>
                <Link className="navLinks" to="/tv">TV</Link>
                <Link className="navLinks" to="/laptop">Laptop</Link>
                <Link className="navLinks" to="/fitness">Fitness & Lifestyle</Link>
                <Link className="navLinks" to="/home">Home</Link>
                <Link className="navLinks" to="/radio">Radio</Link>
                <Link className="navLinks" to="/accessories">Accessories</Link>
                <div className="searchBox">
                    <input type="text" name="search" placeholder="Search Products"/>
                    {search}
                </div>
        </div>
    )
}

export default Navbar
