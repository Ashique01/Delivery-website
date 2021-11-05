import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Worker.css'

const Worker = ({ worker }) => {
    const { name, experience, img } = worker;
    return (
        <div id='worker'>
            <Col>
                <Card className='style-worker'>
                    <Card.Img className='image-style-service mx-auto img-style ' variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className='text-center text-success fw-bolder fs-3'>Name: <span className='text-danger'>{name.toUpperCase()}</span></Card.Title>
                        <Card.Text className='text-center text-warning fw-bolder  fs-6'>Experience:<span className='text-primary'>{experience}</span></Card.Text>
                    </Card.Body>

                </Card>
            </Col>

        </div>
    );
};

export default Worker;