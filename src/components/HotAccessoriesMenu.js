import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/HotAccessoriesMenu.css'
const HotAccessoriesMenu = () => {
    return (
        <div className="hotAccessoriesMenu">
            <Link className="hotAccessoriesMenuLink" to="/music">Music Store</Link>
            <Link className="hotAccessoriesMenuLink" to="/smartDevice">Smart Devices</Link>
            <Link className="hotAccessoriesMenuLink" to="/home">Home</Link>
            <Link className="hotAccessoriesMenuLink" to="/lifestyle">Lifestyle</Link>
            <Link className="hotAccessoriesMenuLink" to="mobileAccessories">Mobile Accessories</Link>
        </div>
    )
}

export default HotAccessoriesMenu
