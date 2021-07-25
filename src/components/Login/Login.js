import React from "react";
import { Container, Form, Button, Card } from "react-bootstrap";

const Login = () => {
    return (
        <Container className="mt-2">
            <Card className="shadow-sm p-3 mb-5 bg-white rounded">
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Stay signed in" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Log In
                    </Button>
                    <br />
                    <br />
                    <p>Don't have an account? Sign up here!</p>
                    <Button variant="primary" type="submit">
                        Sign Up
                    </Button>
                </Form>
            </Card>
        </Container>
    );
};

export default Login;
