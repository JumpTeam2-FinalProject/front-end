import React, { useState } from "react";
import {
    Container,
    Form,
    Button,
    Card,
    FloatingLabel,
    Col,
    Row,
} from "react-bootstrap";
import { useHistory } from "react-router";
import classes from "./Login.module.css";

const Login = () => {
    const [validated, setValidated] = useState(false);
    let history = useHistory();

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    const sendToSignUpPage = () => {
        history.push("/signup");
    };
    return (
        <div className={classes.Login}>
            <br />
            <br />
            <Container>
                <Row>
                    <Col xs={4} md={4} lg={4}></Col>
                    <Col xs={4} md={4} lg={4}>
                        <Card className="shadow-sm p-4 mb-3 bg-white rounded">
                            <h2 style={{ textAlign: "center" }}>Login</h2>
                            <br />

                            {/* TODO: Check if user exists and store session id */}
                            <Form
                                noValidate
                                validated={validated}
                                onSubmit={handleSubmit}
                            >
                                <Form.Group
                                    className="mb-4"
                                    controlId="formGroupEmail"
                                >
                                    <FloatingLabel label="Email address">
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter email"
                                            required
                                        />
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formGroupPassword"
                                >
                                    <FloatingLabel label="Password">
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            required
                                        />
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    id="formGridCheckbox"
                                >
                                    <Form.Check
                                        type="checkbox"
                                        label="Stay signed in"
                                    />
                                </Form.Group>
                                <Button variant="outline-primary" type="submit">
                                    Log In
                                </Button>
                                <br />
                                <br />
                                <p>Don't have an account? Sign up here!</p>
                                <Button
                                    variant="outline-primary"
                                    onClick={sendToSignUpPage}
                                >
                                    Sign Up
                                </Button>
                            </Form>
                        </Card>
                    </Col>
                    <Col xs={4} md={4} lg={4}></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;
