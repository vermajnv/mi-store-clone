import React from 'react'
import HotItemCard from './HotItemCard'
import '../styles/HotAccessories.css'
const HotAccessories = (data) => {
    console.log(data);
    return (
        <div className="hotAccessories">
            <div>
                <img src={data.cover} alt=""/>
            </div>
            <div>
                {
                    data.image.map((item, index) => {
                        return <HotItemCard key={index} image={item.image} imageName={item.name} price={item.price}></HotItemCard>
                    })
                }
            </div>
        </div>
    )
}

export default HotAccessories
