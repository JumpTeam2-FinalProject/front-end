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
import { isJwtFailError, doFetch } from "../../utility";
import Alert from '../Alert/Alert';
import classes from "./Login.module.css";

const DEFAULT_PROBLEM_MESSAGE = "Your submission could not be processed.";

const Login = ({ currentUser, setCurrentUser, handleLogin }) => {

    // const [validated, setValidated] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [problemMessage, setProblemMessage] = useState(null);
    
    let history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        // const form = event.currentTarget;
        // if (form.checkValidity() === false) {
        //     event.stopPropagation();
        // }
        // setValidated(true);
        let response;
        doFetch('/api/authenticate', 'POST', { username, password })
            .then(__response => {
                response = __response;
                return response.json();
            })
            .then(resData => {
                if (response.ok && resData && resData.jwt) {
                    handleLogin(resData.jwt);
                    return;
                }
                setProblemMessage((resData && resData.message) || DEFAULT_PROBLEM_MESSAGE);
            })
            .catch(err => {
                console.log(err);
                if (isJwtFailError(err)) return;
                setProblemMessage(DEFAULT_PROBLEM_MESSAGE);
            });
    };

    const sendToSignUpPage = () => {
        history.push("/signup");
    };

    return (
        <div className={classes.Login}>
            <br />
            <br />
            <Container>
                <Card className={`shadow-sm p-4 mb-3 bg-white rounded ${classes.loginCard}`}>
                    <h2 style={{ textAlign: "center" }}>Login</h2>
                    <br />
                    <Alert
                        title="Login Failed"
                        messages={[ problemMessage, "Please try again." ]}
                        dismiss={() => setProblemMessage(null)}
                        isDismissed={!problemMessage}
                    />
                    <Form
                        noValidate
                        // validated={validated}
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
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
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
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </FloatingLabel>
                        </Form.Group>
                        {/* NOTE: leaving this out for now b/c the functionality isn't there on the back end. it could probably be added later if we have time. (The jwt just needs to be set to not expire for a long period of time when it is created.)
                            <Form.Group
                            className="mb-3"
                            id="formGridCheckbox"
                        >
                            <Form.Check
                                type="checkbox"
                                label="Stay signed in"
                            />
                        </Form.Group> */}
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
            </Container>
        </div>
    );
};

export default Login;
