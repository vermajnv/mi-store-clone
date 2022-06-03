import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'
function Slider({start}) {
    return (
        <div>
            <Carousel fade>
                {
                    start.map((item, index) => {
                        return <Carousel.Item key={index}>
                            <img
                                className="d-block w-100"
                                src={item}
                                alt="First slide"
                            />
                        </Carousel.Item>
                    })
                }
            </Carousel>
        </div>
    )
}

export default Slider
