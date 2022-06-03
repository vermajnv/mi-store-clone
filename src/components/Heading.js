import React from 'react'
import '../styles/Heading.css'

const Heading = (data) => {
    return (
        <div className="heading">
            <div></div>
            <p>{data.txt}</p>
            <div></div>
        </div>
    )
}

export default Heading
