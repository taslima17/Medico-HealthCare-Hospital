import React from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
const Apointment = () => {
    return (
        <div className="d-flex flex-lg-nowrap flex-wrap my-5  p-5">
            <div className="p-5 " style={{ textAlign: "left", width: "60%" }}>
                <h4>What to do first</h4>
                <h5>Create your medical profile.</h5>
                <p>We'll ask for some basic information to assess your care needs.</p>
                <h5>Have your insurance ready.</h5>
                <p>You can scan your insurance card or enter your details manually.If you have financial probelm then apply for help.</p>
                <h5>Schedule a phone call.</h5>
                <p>Pick the best time for our team to follow up with a call.</p>
            </div>
            <div>
                <h4>Book an Appointment</h4>
                <Form>

                    <Form.Group className="mb-3" controlId="formGridState">

                        <Form.Select defaultValue="Select Department">
                            <option>Select Department</option>
                            <option>...</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGridEmail">

                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" as={Col} controlId="formGridPassword">

                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formGridPhone">

                        <Form.Control placeholder="Phone number" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">

                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">

                            <Form.Control placeholder="City" />
                        </Form.Group>



                        <Form.Group as={Col} controlId="formGridZip">

                            <Form.Control placeholder="Zip" />
                        </Form.Group>
                    </Row>



                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Apointment;