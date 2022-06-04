import React from 'react'
import '../styles/HotItemCard.css'
const HotItemCard = (data) => {
    return (
        <div className='hotItemCard'>
            <img src={data.image} alt={`${data.index} product`}/>
            <p>{data.imageName}</p>
            <span>{data.price}</span>
        </div>
    )
}

export default HotItemCard
