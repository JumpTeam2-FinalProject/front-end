import React, { useState } from "react";
import {
    Container,
    Form,
    Row,
    Col,
    Button,
    Card,
    FloatingLabel,
} from "react-bootstrap";
import { doFetch } from "../../utility";
import Alert from "../Alert/Alert";
import classes from "./SignUp.module.css";

const DEFAULT_PROBLEM_MESSAGE = "Your submission could not be processed.";

const SignUp = ({ handleLogin, currentUser }) => {
    const hasCurrentUser = !!currentUser;
    const [email, setEmail] = useState(currentUser ? currentUser.username : "");
    const [isTouchedEmail, setIsTouchedEmail] = useState(hasCurrentUser);
    const [password, setPassword] = useState("");
    const [isTouchedPassword, setIsTouchedPassword] = useState(hasCurrentUser);
    const [firstName, setFirstName] = useState(currentUser ? currentUser.firstName : "");
    const [isTouchedFirstName, setIsTouchedFirstName] = useState(hasCurrentUser);
    const [lastName, setLastName] = useState(currentUser ? currentUser.lastName : "");
    const [isTouchedLastName, setIsTouchedLastName] = useState(hasCurrentUser);
    const [problemMessage, setProblemMessage] = useState(null);

    // regex source: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript#answer-9204568
    const isEmailInvalid =
        isTouchedEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // (this syntax is a RegEx literal)
    const isPasswordInvalid = (
        isTouchedPassword &&
        password.length < 4 &&
        (!currentUser || password.length > 0) // when updating, password can be left blank to update account without updating password
    );
    const isFirstNameInvalid = isTouchedFirstName && !firstName;
    const isLastNameInvalid = isTouchedLastName && !lastName;

    const handleSubmit = (event) => {
        event.preventDefault();
        const reqBody = { username: email, password, firstName, lastName };
        let response;
        doFetch("user", "POST", reqBody)
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

    const changeHandlerFactory = (valueSetter, isTouchedSetter) => (event) => {
        valueSetter(event.target.value);
        if (isTouchedSetter) isTouchedSetter(true);
    };

    return (
        <div className={classes.SignUp}>
            <br />
            <br />
            <Container>
                <Row>
                    <Col xs={0} md={0} lg={1}></Col>
                    <Col xs={12} md={12} lg={10}>
                        <Card className="shadow-sm p-4 mb-5 bg-white rounded">
                            <h2 style={{ textAlign: "center" }}>
                                {currentUser ? "Update Account" : "Create Account"}
                            </h2>
                            <br />
                            <Alert
                                title={currentUser ? "Account Update Faled" : "Sign Up Failed"}
                                messages={[problemMessage, "Please try again."]}
                                dismiss={() => setProblemMessage(null)}
                                isDismissed={!problemMessage}
                            />
                            <Form onSubmit={handleSubmit} noValidate>
                                <Row className="mb-3">
                                    <Form.Group
                                        as={Col}
                                        controlId="formGridEmail"
                                    >
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Email"
                                        >
                                            <Form.Control
                                                type="email"
                                                placeholder="Current"
                                                required
                                                onChange={changeHandlerFactory(
                                                    setEmail,
                                                    setIsTouchedEmail
                                                )}
                                                isInvalid={isEmailInvalid}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please enter a valid email.
                                            </Form.Control.Feedback>
                                        </FloatingLabel>
                                    </Form.Group>

                                    <Form.Group
                                        as={Col}
                                        controlId="formGridPassword"
                                    >
                                        <FloatingLabel
                                            controlId="floatingPassword"
                                            label="Password"
                                        >
                                            <Form.Control
                                                type="password"
                                                placeholder="Password"
                                                required
                                                onChange={changeHandlerFactory(
                                                    setPassword,
                                                    setIsTouchedPassword
                                                )}
                                                isInvalid={isPasswordInvalid}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Must be at least 4 characters
                                                long.
                                            </Form.Control.Feedback>
                                        </FloatingLabel>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group
                                        as={Col}
                                        controlId="formGridFirstName"
                                    >
                                        <FloatingLabel
                                            controlId="floatingFirstName"
                                            label="First Name"
                                        >
                                            <Form.Control
                                                placeholder="First Name"
                                                required
                                                onChange={changeHandlerFactory(
                                                    setFirstName,
                                                    setIsTouchedFirstName
                                                )}
                                                isInvalid={isFirstNameInvalid}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please enter a first name.
                                            </Form.Control.Feedback>
                                        </FloatingLabel>
                                    </Form.Group>

                                    <Form.Group
                                        as={Col}
                                        controlId="formGridLastName"
                                    >
                                        <FloatingLabel
                                            controlId="floatingLastName"
                                            label="Last Name"
                                        >
                                            <Form.Control
                                                placeholder="Last Name"
                                                required
                                                onChange={changeHandlerFactory(
                                                    setLastName,
                                                    setIsTouchedLastName
                                                )}
                                                isInvalid={isLastNameInvalid}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please enter a last name.
                                            </Form.Control.Feedback>
                                        </FloatingLabel>
                                    </Form.Group>
                                </Row>

                                <Button
                                    className="mt-2"
                                    variant="outline-primary"
                                    type="submit"
                                >
                                    Create Account
                                </Button>
                            </Form>
                        </Card>
                    </Col>
                    <Col xs={0} md={0} lg={1}></Col>
                </Row>
            </Container>
        </div>
    );
};

export default SignUp;
