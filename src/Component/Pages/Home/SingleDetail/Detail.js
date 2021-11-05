import { connectAuthEmulator } from '@firebase/auth';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../../Hooks/useAuth';
import './Detail.css'


const Detail = () => {
    let { serviceId } = useParams();
    const [details, setDetails] = useState([])
    const [singleDetail, setSingleDetail] = useState({})
    const { user } = useAuth();
    useEffect(() => {
        fetch('https://powerful-tor-93554.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [])
    useEffect(() => {
        const foundDetail = (details.find(service => service._id === parseInt(serviceId)));
        setSingleDetail(foundDetail);

    }, [details])
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('https://powerful-tor-93554.herokuapp.com/confirmOrder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order processed Successfully');
                }
            })
    };

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <div className="container">
                            <h1 className='fs-2 fw-bolder bg-warning text-success mx-auto w-50 mt-2'>{singleDetail?.name}</h1>
                            <div className="cardcontainer">
                                <div className="photo">
                                    <img src={singleDetail?.img} alt="" />
                                    <div className="photos">Photo</div>
                                </div>
                                <div className="content">
                                    <p className="txt4">{singleDetail?.description}</p>
                                    <p className="fs-3 text-danger mt-5 fw-bolder">Price: <span className='text-success fw-bold'>{singleDetail?.price} BDT</span></p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='cardcontainer mt-5'>
                            <h1 className='fs-2 fw-bolder  text-primary mx-auto w-50  mt-2'>Fill Up for Order</h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <p>Name: <input {...register("firstName")} placeholder='Enter your name' /></p>
                                <p>Gender: <select {...register("gender")}>
                                    <option value="female">female</option>
                                    <option value="male">male</option>
                                    <option value="other">other</option>
                                </select></p>
                                <p>Mobile No: <input {...register("number")} type="number" placeholder='01XXXXXXXXX' /></p>
                                <p>Email: <input {...register("email")} type="email" defaultValue={user?.email} placeholder='Enter Your Email' /></p>
                                <p>Date: <input {...register("date")} type="date" placeholder='Enter Current Date' /></p>
                                <p>Delivery Service Name: <select {...register("serviceName")}>
                                    <option value="Corporate Delivery">Corporate Delivery</option>
                                    <option value="Personal Delivery">Personal Delivery</option>
                                    <option value="Letter Delivery">Letter Delivery</option>
                                    <option value="Package Delivery">Package Delivery</option>
                                    <option value="Food Delivery">Food Delivery</option>
                                    <option value="Trailer Delivery">Trailer Delivery</option>
                                </select></p>
                                <p>Delivery Item: <input {...register("deliveryItem")} placeholder='want to delivery what' /></p>
                                <p className='text-primary fw-bolder mt-2 mb-2'>Please just click once in both of the input field</p>

                                <p>Image: <input {...register("imgUrl")} defaultValue={singleDetail?.img} /></p>
                                <p>Price: <input {...register("price")} defaultValue={singleDetail?.price} /></p>
                                <br />
                                <input className='btn btn-primary' type="submit" />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Detail;