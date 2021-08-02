import React, { useEffect, useState } from "react";
import { Container, Card, Form, Button, Col, Row } from "react-bootstrap";
import { doFetch } from "../../utility";
import Alert from "../Alert/Alert";

const DEFAULT_PROBLEM_MESSAGE = "Your review could not be added.";

const getInputId = (inputName) => `review-form-${inputName}-input`;
const inputIds = {
    restaurant: getInputId("restaurant"),
    rating: getInputId("rating"),
    comment: getInputId("comment"),
};

const ReviewForm = (props) => {
    const [restaurant, setRestaurant] = useState("");
    const [isTouchedRestaurant, setIsTouchedRestaurant] = useState(false);
    const [rating, setRating] = useState(0);
    const [isTouchedRating, setIsTouchedRating] = useState(false);
    const [comment, setComment] = useState("");
    const [isTouchedComment, setIsTouchedComment] = useState(false);
    const [problemMessage, setProblemMessage] = useState(null);
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetchRestaurants();
    }, []);

    const fetchRestaurants = () => {
        doFetch("restaurants")
            .then((response) => response.json())
            .then((data) => {
                setRestaurants(data);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const changeHandlerFactory = (valueSetter, isTouchedSetter) => (event) => {
        valueSetter(event.target.value);
        if (isTouchedSetter) isTouchedSetter(true);
    };

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
                            <Alert
                                title="Login Failed"
                                messages={[problemMessage, "Please try again."]}
                                dismiss={() => setProblemMessage(null)}
                                isDismissed={!problemMessage}
                            />
                            <Form>
                                <Form.Group>
                                    <Form.Label htmlFor={inputIds.restaurant}>
                                        Restaurant
                                    </Form.Label>
                                    <Form.Select
                                        id={inputIds.restaurant}
                                        aria-label="Select restaurant"
                                        required
                                        value={restaurant}
                                        isInvalid={
                                            isTouchedRestaurant && !restaurant
                                        }
                                        onChange={changeHandlerFactory(
                                            setRestaurant,
                                            setIsTouchedRestaurant
                                        )}
                                    >
                                        <option value="">
                                            Select Restaurant
                                        </option>
                                        {/* {restaurants.map(({ }))} */}
                                        <option value="Taco Bell">
                                            Taco Bell
                                        </option>
                                        <option value="McDonald's">
                                            McDonald's
                                        </option>
                                        <option value="Subway">Subway</option>
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        Please select a restaurant to review.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3 mt-3">
                                    <Form.Label htmlFor={inputIds.rating}>
                                        Rating
                                    </Form.Label>
                                    <Form.Select
                                        id={inputIds.rating}
                                        aria-label="Select rating"
                                        required
                                        value={rating}
                                        isInvalid={isTouchedRating && !rating}
                                        onChange={changeHandlerFactory(
                                            setRating,
                                            setIsTouchedRating
                                        )}
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
                                    <Form.Control.Feedback type="invalid">
                                        Please select a rating for the
                                        restaurant.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor={inputIds.comment}>
                                        Your Review
                                    </Form.Label>
                                    <Form.Control
                                        id={inputIds.comment}
                                        as="textarea"
                                        rows={4}
                                        placeholder="Write your review here..."
                                        value={comment}
                                        onChange={changeHandlerFactory(
                                            setComment,
                                            setIsTouchedComment
                                        )}
                                    />
                                </Form.Group>
                                <Button variant="outline-primary" type="submit">
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
