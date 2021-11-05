import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';
import { Card, Col } from 'react-bootstrap';

const Service = ({ service }) => {
    // const {service} = props;
    const { _id, name, price, description, img } = service;
    return (
        <div id='services'>
            <Col>
                <Card className='style-service'>
                    <Card.Img className='image-style-service mx-auto img-style ' variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className='text-center text-white fw-bolder fs-3'><span className='text-danger'>{name.toUpperCase()}</span></Card.Title>
                        <Card.Text className='text-center text-dark fw-bolder fs-4'>Price: <span className='text-success'>{price} Tk</span></Card.Text>

                        <Link to={`/detail/${_id}`}>
                            <button className='btn btn-warning rounded-pill fw-bolder' >Add To Cart</button>
                        </Link>

                    </Card.Body>

                </Card>
            </Col>
        </div>
    );
};
export default Service;