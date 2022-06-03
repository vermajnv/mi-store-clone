import React from 'react'
import '../styles/StarProducts.css'
function StarProducts(products) {
    console.log(products.products[0].url);
    return (
        <div className="starProduct">
            <div>
                <a href={products.products[0].url}><img src={products.products[0].image} alt="List Product"/></a>
            </div>
            
            <div>
                <a href={products.products[1].url}><img src={products.products[1].image} alt="List Product"/></a>
                <a href={products.products[2].url}><img src={products.products[2].image} alt="List Product"/></a>
                <a href={products.products[3].url}><img src={products.products[3].image} alt="List Product"/></a>
            </div>
        </div>
    )
}

export default StarProducts
