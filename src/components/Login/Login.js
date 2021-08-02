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
import Alert from "../Alert/Alert";
import classes from "./Login.module.css";

const DEFAULT_PROBLEM_MESSAGE = "Your submission could not be processed.";

const Login = ({ handleLogin }) => {
    const [username, setUsername] = useState("");
    const [isTouchedUsername, setIsTouchedUsername] = useState(false);
    const [password, setPassword] = useState("");
    const [isTouchedPassword, setIsTouchedPassord] = useState(false);
    const [staySignedIn, setStaySignedIn] = useState(false);
    const [problemMessage, setProblemMessage] = useState(null);

    const isUsernameInvalid = isTouchedUsername && !username;
    const isPasswordInvalid = isTouchedPassword && !password;

    let history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        const reqPath = "authenticate" + (staySignedIn ? "/remember" : "");
        let response;
        doFetch(reqPath, "POST", { username, password })
            .then((__response) => {
                response = __response;
                return response.json();
            })
            .then((resData) => {
                if (response.ok && resData && resData.jwt) {
                    handleLogin(resData);
                    return;
                }
                setProblemMessage(
                    (resData && resData.message) || DEFAULT_PROBLEM_MESSAGE
                );
            })
            .catch((err) => {
                console.log(err);
                setProblemMessage(DEFAULT_PROBLEM_MESSAGE);
            });
    };

    const sendToSignUpPage = () => {
        history.push("/signup");
    };

    const changeHandlerFactory = (valueSetter, isTouchedSetter) => (event) => {
        valueSetter(event.target.value);
        if (isTouchedSetter) isTouchedSetter(true);
    };

    return (
        <div className={classes.Login}>
            <br />
            <br />
            <Container>
                <Card
                    className={`shadow-sm p-4 mb-3 bg-white rounded ${classes.loginCard}`}
                >
                    <h2 style={{ textAlign: "center" }}>Login</h2>
                    <br />
                    <Alert
                        title="Login Failed"
                        messages={[problemMessage, "Please try again."]}
                        dismiss={() => setProblemMessage(null)}
                        isDismissed={!problemMessage}
                    />
                    <Form noValidate onSubmit={handleSubmit}>
                        <Form.Group className="mb-4" controlId="formGroupEmail">
                            <FloatingLabel label="Email address">
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    required
                                    value={username}
                                    onChange={changeHandlerFactory(
                                        setUsername,
                                        setIsTouchedUsername
                                    )}
                                    isInvalid={isUsernameInvalid}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter the email associated with your
                                    account.
                                </Form.Control.Feedback>
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
                                    isInvalid={isPasswordInvalid}
                                    onChange={changeHandlerFactory(
                                        setPassword,
                                        setIsTouchedPassord
                                    )}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter your password.
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3" id="formGridCheckbox">
                            <Form.Check
                                type="checkbox"
                                label="Stay signed in"
                                value={staySignedIn}
                                onChange={(e) =>
                                    setStaySignedIn(e.target.checked)
                                }
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
            </Container>
        </div>
    );
};

export default Login;
