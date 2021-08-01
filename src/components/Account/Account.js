import React from "react";
import { Card, Container, Form, Row, Col, Button } from "react-bootstrap";
import classes from "./Account.module.css";

const Account = () => {
    return (
        <div className={classes.Account}>
            <br />
            <br />
            <Container>
                <Row>
                    <Col xs={1} md={1} lg={1}></Col>
                    <Col xs={10} md={10} lg={10}>
                        <Card className="shadow-sm p-4 mb-4 bg-white rounded">
                            <h2 style={{ textAlign: "center" }}>
                                Manage Account
                            </h2>
                            <br />
                            {/* TODO: Grab user data from db and apply updates/changes */}
                            <Form>
                                <Row className="mb-3">
                                    <Form.Group
                                        as={Col}
                                        controlId="formGridEmail"
                                    >
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            defaultValue="jim@jim.com"
                                        />
                                    </Form.Group>

                                    <Form.Group
                                        as={Col}
                                        controlId="formGridPassword"
                                    >
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            defaultValue="Password"
                                        />
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3">
                                    <Form.Group
                                        as={Col}
                                        controlId="formGridFirstName"
                                    >
                                        <Form.Label controlId="formFirstName">
                                            First Name
                                        </Form.Label>
                                        <Form.Control defaultValue="Jim" />
                                        <Form.Control.Feedback type="invalid">
                                            Please enter a first name.
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group
                                        as={Col}
                                        controlId="formGridLastName"
                                    >
                                        <Form.Label controlId="formLastName">
                                            Last Name
                                        </Form.Label>
                                        <Form.Control defaultValue="Nguyen" />
                                        <Form.Control.Feedback type="invalid">
                                            Please enter a last name.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                                <Form.Group
                                    className="mb-3"
                                    controlId="formGridAddress1"
                                >
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control defaultValue="123 React Lane" />
                                </Form.Group>

                                <Form.Group
                                    className="mb-3"
                                    controlId="formGridAddress2"
                                >
                                    <Form.Label>Address 2</Form.Label>
                                    <Form.Control defaultValue="Unit A" />
                                </Form.Group>

                                <Row className="mb-3">
                                    <Form.Group
                                        as={Col}
                                        controlId="formGridCity"
                                    >
                                        <Form.Label>City</Form.Label>
                                        <Form.Control defaultValue="JavaScript" />
                                    </Form.Group>

                                    <Form.Group
                                        as={Col}
                                        controlId="formGridState"
                                    >
                                        <Form.Label>State</Form.Label>
                                        <Form.Select defaultValue="WA">
                                            <option value="WA">WA</option>
                                            <option value="AL">AL</option>
                                            <option value="AK">AK</option>
                                            <option value="AR">AR</option>
                                            <option value="AZ">AZ</option>
                                            <option value="CA">CA</option>
                                            <option value="CO">CO</option>
                                            <option value="CT">CT</option>
                                            <option value="DC">DC</option>
                                            <option value="DE">DE</option>
                                            <option value="FL">FL</option>
                                            <option value="GA">GA</option>
                                            <option value="HI">HI</option>
                                            <option value="IA">IA</option>
                                            <option value="ID">ID</option>
                                            <option value="IL">IL</option>
                                            <option value="IN">IN</option>
                                            <option value="KS">KS</option>
                                            <option value="KY">KY</option>
                                            <option value="LA">LA</option>
                                            <option value="MA">MA</option>
                                            <option value="MD">MD</option>
                                            <option value="ME">ME</option>
                                            <option value="MI">MI</option>
                                            <option value="MN">MN</option>
                                            <option value="MO">MO</option>
                                            <option value="MS">MS</option>
                                            <option value="MT">MT</option>
                                            <option value="NC">NC</option>
                                            <option value="NE">NE</option>
                                            <option value="NH">NH</option>
                                            <option value="NJ">NJ</option>
                                            <option value="NM">NM</option>
                                            <option value="NV">NV</option>
                                            <option value="NY">NY</option>
                                            <option value="ND">ND</option>
                                            <option value="OH">OH</option>
                                            <option value="OK">OK</option>
                                            <option value="OR">OR</option>
                                            <option value="PA">PA</option>
                                            <option value="RI">RI</option>
                                            <option value="SC">SC</option>
                                            <option value="SD">SD</option>
                                            <option value="TN">TN</option>
                                            <option value="TX">TX</option>
                                            <option value="UT">UT</option>
                                            <option value="VT">VT</option>
                                            <option value="VA">VA</option>
                                            <option value="WA">WA</option>
                                            <option value="WI">WI</option>
                                            <option value="WV">WV</option>
                                            <option value="WY">WY</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group
                                        as={Col}
                                        controlId="formGridZip"
                                    >
                                        <Form.Label>Zip</Form.Label>
                                        <Form.Control defaultValue="12345" />
                                    </Form.Group>
                                </Row>

                                <Button variant="outline-primary" type="submit">
                                    Save Changes
                                </Button>
                            </Form>
                        </Card>
                    </Col>
                    <Col xs={1} md={1} lg={1}></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Account;
