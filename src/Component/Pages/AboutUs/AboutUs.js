import React from 'react';
import { Card, ListGroup, ListGroupItem, Button, Container, Row, Col } from 'react-bootstrap';
import img1 from '../../../Images/About Us/image2.png'
import img2 from '../../../Images/About Us/image1.png'



const AboutUs = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col className='mt-5'>
                        <h1 className='text-primary fw-bolder text-center mt-5 text-center'>Have You faced any problems or want to know something</h1>
                        <img className='img-style' src={img2} alt="" srcset="" />
                    </Col>
                    <Col className='mt-5'>
                        <Card className='mx-auto bg-success' style={{ width: '25rem' }}>
                            <Card.Img variant="top" src={img1} />
                            <Card.Body>
                                <Card.Title className='fw-bolder text-warning'>About Us</Card.Title>
                                <Card.Text className='fs-6 text-dark fw-bolder'>
                                    If you face any troubles and want to know about our organization please feel free to call us
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush bg-danger">
                                <ListGroupItem>Email: <span className='text-primary fw-bold'>ashiquemurad@gmail.com</span></ListGroupItem>
                                <ListGroupItem>Help Line: <span className='text-primary fw-bolder'>165999</span> </ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Button variant="info" href='/home'>Home</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default AboutUs;
<h1 className='text-primary fw-bolder text-center mt-5'>Have You faced any problems or want to know something</h1>
