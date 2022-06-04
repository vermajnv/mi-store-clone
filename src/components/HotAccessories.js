import React from 'react'
import HotItemCard from './HotItemCard'
import '../styles/HotAccessories.css'
const HotAccessories = (data) => {
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
                <HotItemCard image={'https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg'}></HotItemCard>
            </div>
        </div>
    )
}

export default HotAccessories
