import React, { useState } from "react";
import { Container, Card, Form, Button, Col, Row } from "react-bootstrap";

const ReviewForm = (props) => {
    const [restaurant, setRestaurant] = useState("");
    const [isTouchedRestaurant, setIsTouchedRestaurant] = useState(false);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");

    const getRestaurant = (e) => {
        setRestaurant(e.target.value);
    };

    const getRating = (e) => {
        setRating(e.target.value);
    };

    const getComment = (e) => {
        setComment(e.target.value);
    };

    const changeHandlerFactory = (valueSetter, isTouchedSetter) => (
        (event) => {
            valueSetter(event.target.value);
            if (isTouchedSetter) isTouchedSetter(true);
        }
    );

    return (
        <div>
            <Container>
                <Row>
                    <Col xs={0} sm={1} lg={2}></Col>
                    <Col xs={12} sm={10} lg={8}>
                        <Card className="shadow-sm p-4 mb-5 bg-white rounded mt-2">
                            <h2 style={{ textAlign: "center" }}>
                                Write Reviews
                            </h2>
                            <br />

                            {/* TODO: Save review to db */}
                            <Form>
                                <Form.Group>
                                    <Form.Label>Restaurant</Form.Label>

                                    {/* TODO: Load restaurant data for select */}
                                    <Form.Select
                                        aria-label="Select restaurant"
                                        onChange={getRestaurant}
                                        required
                                        defaultValue=""
                                    >
                                        <option value="">
                                            Select Restaurant
                                        </option>
                                        <option value="Taco Bell">
                                            Taco Bell
                                        </option>
                                        <option value="McDonald's">
                                            McDonald's
                                        </option>
                                        <option value="Subway">Subway</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group
                                    className="mb-3 mt-3"
                                    controlId="exampleForm.ControlInput1"
                                >
                                    <Form.Label>Rating</Form.Label>
                                    <Form.Select
                                        aria-label="Select rating"
                                        required
                                        onChange={getRating}
                                    >
                                        <option value="">Select Rating</option>
                                        <option value="0.5">.5</option>
                                        <option value="1">1</option>
                                        <option value="1.5">1.5</option>
                                        <option value="2">2</option>
                                        <option value="2.5">2.5</option>
                                        <option value="3">3</option>
                                        <option value="3.5">3.5</option>
                                        <option value="4">4</option>
                                        <option value="4.5">4.5</option>
                                        <option value="5">5</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlTextarea1"
                                >
                                    <Form.Label>Your Review</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={4}
                                        placeholder="Write your review here..."
                                        onChange={getComment}
                                    />
                                </Form.Group>
                                <Button
                                    variant="outline-primary"
                                    type="submit"
                                    onClick={(e) =>
                                        props.fetchReview(e, {
                                            restaurant,
                                            rating,
                                            comment,
                                        })
                                    }
                                >
                                    Submit
                                </Button>
                            </Form>
                        </Card>
                    </Col>
                    <Col xs={0} sm={1} lg={2}></Col>
                </Row>
            </Container>
        </div>
    );
};

export default ReviewForm;
