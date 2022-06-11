import React from 'react'
import '../styles/Navbar.css'
import * as data from '../data/data.json'
import {search} from '../icons/icons.js'

let dataMutate = data;
const Navbar = () => {
    return (
        <div className="nav">
            <div className="logo">
                <a href="/" className="navLinks">
                    <img id="logoImage" src={dataMutate.logo} alt="Not Fount"/>
                </a>
            </div>  
                <a className="navLinks" href="/miphone">Mi Phones</a>
                <a className="navLinks" href="/redmiphone">Redmi Phones</a>
                <a className="navLinks" href="/tv">TV</a>
                <a className="navLinks" href="/laptop">Laptop</a>
                <a className="navLinks" href="/fitness">Fitness & Lifestyle</a>
                <a className="navLinks" href="/home">Home</a>
                <a className="navLinks" href="/audio">Audio</a>
                <a className="navLinks" href="/accessories">Accessories</a>
                <div className="searchBox">
                    <input type="text" name="search" placeholder="Search Products"/>
                    {search}
                </div>
        </div>
    )
}

export default Navbar
