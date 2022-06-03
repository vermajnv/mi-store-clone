import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/HotAccessories.css'
const HotAccessories = () => {
    return (
        <div className="hotAccessoriesMenu">
            <Link className="hotAccessoriesMenuLink" to="/music">Music Store</Link>
            <Link className="hotAccessoriesMenuLink" to="/smartDevices">Smart Devices</Link>
            <Link className="hotAccessoriesMenuLink" to="/home">Home</Link>
            <Link className="hotAccessoriesMenuLink" to="/lifestyle">Lifestyle</Link>
            <Link className="hotAccessoriesMenuLink" to="mobileAccessories">Mobile Accessories</Link>
        </div>
    )
}

export default HotAccessories
