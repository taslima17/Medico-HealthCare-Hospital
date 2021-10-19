import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useJson from '../../Hooks/useJson';

const Services = () => {
    const [data] = useJson("services");
    const history = useHistory();
    const handleDetails = (service) => {
        const url = `/service/${service.id}`
        history.push(url);
    }

    return (
        <div>
            <h2 className="my-5 w-25 mx-auto pb-3" style={{ borderBottom: "5px solid blue" }}>Our Services</h2>
            <Row xs={1} md={2} lg={3} className="g-5 container mx-auto">
                {Array.from({ length: 1 }).map((_, idx) => (
                    data.map(s => <Col className=" shadow-lg " key={s.id}>
                        <Card className="p-3  d-flex align-items-center flex-column border-0">
                            <Card.Img src={s.icon} alt="Card image" className="w-50 p-4  mx-auto " />
                            <Card.Title className="text-primary">{s.name}</Card.Title>
                            <Card.Text>
                                {s.description.slice(0, 100)}
                            </Card.Text>
                            <button onClick={() => handleDetails(s)} className="border-0 bg-white text-primary d-flex align-items-center">See More <i className="ps-3 fas fa-arrow-right"></i></button>
                        </Card>
                    </Col>)
                ))}
            </Row>

        </div>
    );
};

export default Services;