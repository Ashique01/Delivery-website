import React, { useEffect, useState } from 'react';
import { Card, Button, Row } from 'react-bootstrap';
import useAuth from '../../../../Hooks/useAuth';
import './MyOrder.css'

const MyOrder = () => {
    const { user } = useAuth();

    const email = user?.email;
    const [orders, setOrders] = useState([])
    const [dlt, setDlt] = useState(false);
    console.log(email);
    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${email}`)
            .then(res => res.json())
            .then(data => setOrders(data))

    }, [dlt])
    const handleDelete = id => {
        fetch(`http://localhost:5000/cancelOrder/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount)
                    setDlt(!dlt)
            })
    }


    return (
        <div>
            <h1>My orders</h1>
            <section>
                <Row xs={1} md={3} className="mx-5  g-4 justify-content-center">
                    {
                        orders?.map((order) => (
                            <Card className='bg-light bg-gradient shadow-lg mx-3' style={{ width: '20rem' }}>
                                <Card.Img className='circle-image mx-auto mt-2' variant="top" src={order?.imgUrl} />
                                <Card.Body>
                                    <Card.Title className='fs-6 bg-dark text-warning'><span className=' fw-bolder '>Delivery Name:</span>  <span className='fw-bold'>{order?.serviceName}</span> </Card.Title>
                                    <Card.Title className='text-warning w-50 mx-auto bg-dark fw-bolder fs-6'>Price: {order?.price} BDT</Card.Title>
                                    <Button onClick={() => handleDelete(order?._id)} variant="danger">Cancel Order</Button>
                                </Card.Body>
                            </Card>


                        ))
                    }
                </Row>
            </section >


        </div >
    );
};

export default MyOrder;