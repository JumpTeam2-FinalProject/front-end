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
import { doFetch, isJwtFailError } from "../../utility";
import Alert from "../Alert/Alert";
import classes from "./SignUp.module.css";

const DEFAULT_PROBLEM_MESSAGE = "Your submission could not be processed.";

const SignUp = ({ handleLogin }) => {

    const [email, setEmail] = useState("");
    const [isTouchedEmail, setIsTouchedEmail] = useState(false);
    const [password, setPassword] = useState("");
    const [isTouchedPassword, setIsTouchedPassword] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [isTouchedFirstName, setIsTouchedFirstName] = useState(false);
    const [lastName, setLastName] = useState("");
    const [isTouchedLastName, setIsTouchedLastName] = useState(false);
    const [problemMessage, setProblemMessage] = useState(null);

    // regex source: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript#answer-9204568
    const isEmailInvalid = isTouchedEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // (this syntax is a RegEx literal)
    const isPasswordInvalid = isTouchedPassword && password.length < 4;
    const isFirstNameInvalid = isTouchedFirstName && !firstName;
    const isLastNameInvalid = isTouchedLastName && !lastName;

    const handleSubmit = (event) => {
        event.preventDefault();
        const reqBody = { username: email, password, firstName, lastName };
        let response;
        doFetch("/api/user", "POST", reqBody)
            .then(__response => {
                response = __response;
                return response.json();
            })
            .then(resData => {
                if (response.ok && resData && resData.jwt) {
                    handleLogin(resData);
                    return;
                }
                setProblemMessage((resData && resData.message) || DEFAULT_PROBLEM_MESSAGE);
            })
            .catch(err => {
                console.log(err);
                setProblemMessage(DEFAULT_PROBLEM_MESSAGE);
            });
    };

    const changeHandlerFactory = (valueSetter, isTouchedSetter) => (
        (event) => {
            valueSetter(event.target.value);
            if (isTouchedSetter) isTouchedSetter(true);
        }
    );

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
                                Create Account
                            </h2>
                            <br />
                            <Alert
                                title="Sign Up Failed"
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
                                                onChange={changeHandlerFactory(setEmail, setIsTouchedEmail)}
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
                                                onChange={changeHandlerFactory(setPassword, setIsTouchedPassword)}
                                                isInvalid={isPasswordInvalid}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Must be at least 4 characters long.
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
                                                onChange={changeHandlerFactory(setFirstName, setIsTouchedFirstName)}
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
                                                onChange={changeHandlerFactory(setLastName, setIsTouchedLastName)}
                                                isInvalid={isLastNameInvalid}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please enter a last name.
                                            </Form.Control.Feedback>
                                        </FloatingLabel>
                                    </Form.Group>
                                </Row>


{/* 
                                <Form.Group
                                    className="mb-3"
                                    controlId="formGridAddress1"
                                >
                                    <FloatingLabel
                                        controlId="floatingAddress"
                                        label="Address 1 (House Number and Street)"
                                    >
                                        <Form.Control
                                            placeholder="House Number and Street"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please enter an address.
                                        </Form.Control.Feedback>
                                    </FloatingLabel>
                                </Form.Group>

                                <Form.Group
                                    className="mb-3"
                                    controlId="formGridAddress2"
                                >
                                    <FloatingLabel
                                        controlId="floatingAddress2"
                                        label="Address 2 (Apartment, Unit, Building...)"
                                    >
                                        <Form.Control
                                            placeholder="Address 2 (Apartment, Unit, Building...)"
                                            required={false}
                                        />
                                    </FloatingLabel>
                                </Form.Group>

                                <Row className="mb-3">
                                    <Form.Group
                                        as={Col}
                                        controlId="formGridCity"
                                    >
                                        <FloatingLabel
                                            controlId="floatingCity"
                                            label="City"
                                        >
                                            <Form.Control
                                                placeholder="City"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please enter a city.
                                            </Form.Control.Feedback>
                                        </FloatingLabel>
                                    </Form.Group>

                                    <Form.Group
                                        as={Col}
                                        controlId="formGridState"
                                    >
                                        <FloatingLabel label="State">
                                            <Form.Select
                                                required
                                            >
                                                <option value="">
                                                    Select state
                                                </option>
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
                                        </FloatingLabel>
                                    </Form.Group>

                                    <Form.Group
                                        as={Col}
                                        controlId="formGridZip"
                                    >
                                        <FloatingLabel label="Zip">
                                            <Form.Control
                                                placeholder="Zip"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please enter a valid zipcode.
                                            </Form.Control.Feedback>
                                        </FloatingLabel>
                                    </Form.Group>
                                </Row>
 */}


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
