import React, { useState, useEffect } from "react";
import { Card, Container, Form, Row, Col, Button } from "react-bootstrap";
import { doFetch } from "../../utility";
import Alert from "../Alert/Alert";
// import classes from "./Account.module.css";

const DEFAULT_PROBLEM_MESSAGE = "The restaurant could not be updated."

const getInputId = (inputName) => `review-form-${inputName}-input`;
const inputIds = {
    text: getInputId("text"),
    address: getInputId("address"),
    description: getInputId("description"),
    cuisine: getInputId("cuisine")
};

const Res = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasSuccess, setHasSuccess] = useState(false);
    const [text, setText] = useState("");
    const [address, setAddress] = useState("");
    const [description, setDescription] = useState("");
    const [cuisine, setCuisine] = useState("");
    const [problemMessage, setProblemMessage] = useState(null);

    useEffect(() => {
        fetchRestaurant();
    }, []);

    const fetchRestaurant = () => {
        doFetch("restaurant/" + props.match.params.id)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setIsLoading(false);
                setText(data.text);
                setAddress(data.address);
                setDescription(data.description);
                setCuisine(data.cuisine);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const changeHandlerFactory = (valueSetter) => (event) => {
        valueSetter(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const reqPath = "/restaurant/update/" + props.match.params.id;
        const reqBody = {
            // restaurant_id: props.match.params.id,
            text,
            description,
            address
        };
        console.log(reqBody)
        let response;
        doFetch(reqPath, "PUT", reqBody, true)
            .then((__response) => {
                response = __response;
                return response.json();
            })
            .then((resData) => {
                console.log(resData);
                if (response.ok) {
                    setHasSuccess(true);
                    setProblemMessage(null);
                    return;
                }
                setProblemMessage(DEFAULT_PROBLEM_MESSAGE);
            })
            .catch((err) => {
                console.log(err);
                setProblemMessage(DEFAULT_PROBLEM_MESSAGE);
            });
    };

    return (
        <div>
            <br />
            <br />
            <Container>
                <Row>
                    <Col xs={1} md={1} lg={1}></Col>
                    <Col xs={10} md={10} lg={10}>
                        <Card className="shadow-sm p-4 mb-4 bg-white rounded">
                            <h2 style={{ textAlign: "center" }}>
                                Update Restaurant
                            </h2>
                            <br />
                            {hasSuccess && (
                                <Alert
                                    title="Review Posted"
                                    messages={[ "The restaurant was updated successfully."]}
                                    dismiss={() => setHasSuccess(false)}
                                    isDismissed={!hasSuccess}
                                    theme="success"
                                />
                            )}
                            {problemMessage && (
                                <Alert
                                    title="Update Failed"
                                    messages={[ problemMessage, "Please try again." ]}
                                    dismiss={() => setProblemMessage(null)}
                                    isDismissed={!problemMessage}
                                />
                            )}
                            <Form noValidate onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor={inputIds.text}>
                                        Restaurant Name
                                    </Form.Label>
                                    <Form.Control
                                        id={inputIds.text}
                                        placeholder={"Restaurant name..."}
                                        value={text}
                                        onChange={changeHandlerFactory(setText)}
                                        isInvalid={!isLoading && !text}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter the restaurant name.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor={inputIds.description}>
                                        Description
                                    </Form.Label>
                                    <Form.Control
                                        id={inputIds.description}
                                        as="textarea"
                                        rows={4}
                                        placeholder="Restaurant description..."
                                        value={description}
                                        isInvalid={!isLoading && !description}
                                        onChange={changeHandlerFactory(setDescription)}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter a description.
                                    </Form.Control.Feedback>
                                </Form.Group>


                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor={inputIds.cuisine}>
                                        Cuisine
                                    </Form.Label>
                                    <Form.Control
                                        id={inputIds.cuisine}
                                        placeholder={"Cuisine type..."}
                                        value={cuisine}
                                        onChange={changeHandlerFactory(setCuisine)}
                                        isInvalid={!isLoading && !cuisine}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter the cuisine type.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor={inputIds.address}>
                                        Address
                                    </Form.Label>
                                    <Form.Control
                                        id={inputIds.address}
                                        as="textarea"
                                        rows={3}
                                        placeholder="Restaurant address..."
                                        value={address}
                                        isInvalid={!isLoading && !address}
                                        onChange={changeHandlerFactory(setAddress)}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter the address.
                                    </Form.Control.Feedback>
                                </Form.Group>

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

export default Res;
