import React from 'react'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Banner = (banners) => {
  return (
    <Carousel fade>
        {
            banners.banner.map((banner, index) => {
                return <Carousel.Item keyboard={true} key={index}>
                    <img
                        className="d-block w-100"
                        src={banner.image}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>{banner.name}</h3>
                        <p>{banner.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            })
        }
    </Carousel>
  )
}

export default Banner