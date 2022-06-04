import React from 'react'
import '../styles/ProductReview.css'
const ProductReview = (reviews) => {
    console.log(reviews);
    return (
        <div className='productReview'>
            {
                reviews.reviews.map((review, index) => {
                    return <div>
                        <img src={review.image} alt="" />
                        <p>{review.review}</p>
                        <a href={review.image}>{review.name}</a>
                        <span>{review.price}</span>
                    </div>
                })
            }
        </div>
    )
}

export default ProductReview