import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Worker from '../Worker/Worker';

const Workers = () => {
    const [workers, setWorkers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/workers')
            .then(res => res.json())
            .then(data => setWorkers(data));
    }, [])

    return (
        <div>
            <h1 className='mt-5 mb-5 bg-success text-warning'>Our Workers</h1>
            <section>
                <Row xs={1} md={3} className="mx-5  g-4 justify-content-center">
                    {
                        workers.map(worker => <Worker
                            key={worker._id}
                            worker={worker}
                        ></Worker>)
                    }
                </Row>
            </section>


        </div>
    );
};

export default Workers;