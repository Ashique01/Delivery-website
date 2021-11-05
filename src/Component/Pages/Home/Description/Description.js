import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img1 from '../../../../Images/section image/delivery.jpg'
import img2 from '../../../../Images/section image/partner.png'

const Description = () => {
    return (
        <div id='details'>
            <Container>
                <Row>
                    <Col className='mt-5'>
                        <h1 className='text-center fw-bolder text-primary fs-1'>Services</h1>
                        <p className='text-start fs-6'>Delhivery’s aim is to build the operating system for commerce. We provide express parcel transportation, PTL and TL freight, cross-border and supply chain services to over 21000 customers, including large & small e-commerce participants, SMEs, and other leading enterprises & brands. Our supply chain platform and logistics operations bring flexibility, breadth, efficiency and innovation to our customers’ supply chain and logistics. Our operations, infrastructure and technology enable our customers to transact with us and our partners at low costs.</p>
                    </Col>
                    <Col className='mt-5'>
                        <img src={img1} alt="" srcset="" />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col className='mt-5'>
                        <img src={img2} alt="" srcset="" />

                    </Col>
                    <Col className='mt-5'>

                        <h1 className='text-center fw-bolder text-primary fs-1'>Partner</h1>
                        <p className='text-start fs-6'>As a part of our vision, we extend our logistics ecosystem by enabling network partners, such as franchisees, retail partners and delivery agents, to onboard their physical assets and resources and participate in our platform.We have partnered with over 6000 vendors and network partners who provide pickup, delivery services, and truckload capacity. Our network partners are supported by our technology systems, empowering them to grow their business by offering multiple Delhivery services in their catchment areas.</p>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Description;