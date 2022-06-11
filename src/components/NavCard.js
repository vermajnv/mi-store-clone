import React from 'react'
import '../styles/NavCard.css'
const NavCard = (data) => {
  return (
    <div className='navCard'>
        <img src={data.image} alt="Nothing" />
        <p>{data.name}</p>
        <span>{data.price}</span>
    </div>
  )
}

export default NavCard