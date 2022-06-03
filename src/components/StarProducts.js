import React from 'react'

function StarProducts(products) {
    console.log(products.products[0].url);
    return (
        <div className="starProduct">
            <div>
                <a href={products.products[0].url}><img src={products.products[0].image} alt="List Product"/></a>
            </div>
        </div>
    )
}

export default StarProducts
