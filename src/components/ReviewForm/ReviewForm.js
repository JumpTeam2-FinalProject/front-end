import React from "react";
import { Container, Card, Form, Button, Col, Row } from "react-bootstrap";

const ReviewForm = () => {
    return (
        <Container>
            <Row>
                <Col xs={1} md={1} lg={1}></Col>
                <Col xs={10} md={10} lg={10}>
                    <Card className="shadow-sm p-4 mb-5 bg-white rounded mt-2">
                        <h2 style={{ textAlign: "center" }}>Write Review</h2>
                        <br />
                        <Form>
                            <Form.Group>
                                <Form.Label>Restaurant</Form.Label>
                                <Form.Select aria-label="Select restaurant">
                                    <option>Select Restaurant</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group
                                className="mb-3 mt-3"
                                controlId="exampleForm.ControlInput1"
                            >
                                <Form.Label>Rating</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Rating"
                                />
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
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Card>
                </Col>
                <Col xs={1} md={1} lg={1}></Col>
            </Row>
        </Container>
    );
};

export default ReviewForm;
