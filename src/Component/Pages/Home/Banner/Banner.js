import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import banner1 from '../../../../Images/Banner/image1.png';
import banner2 from '../../../../Images/Banner/image2.png';
import banner3 from '../../../../Images/Banner/image3.png';
import './Banner.css'
const Banner = () => {
    return (
        <div>
            <section>
                <h1 className='text-warning fw-bolder bg-success box  fs-1'>Delivery Sytem Management</h1>
            </section>
            <section className='container-fluid'>
                <Row>
                    <Col >
                        <Carousel>
                            <Carousel.Item interval={1000}>
                                <img
                                    className="d-block w-100 h-50 img-style"
                                    src={banner1}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={1000}>
                                <img
                                    className="d-block w-100 h-50 img-style"
                                    src={banner2}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={1000}>
                                <img
                                    className="d-block w-100 h-50 img-style"
                                    src={banner3}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </section>

        </div>
    );
};

export default Banner;