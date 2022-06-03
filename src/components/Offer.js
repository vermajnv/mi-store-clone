// import React from 'react'

const Offer = (obj) => {
    return (
        <a href={obj.link}>
            <img src={obj.url} alt={`${obj.index} offer`}/>
        </a>
    )
}

export default Offer
