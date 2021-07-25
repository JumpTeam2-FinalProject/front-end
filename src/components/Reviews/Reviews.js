import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Review from "./Review/Review";

const Reviews = () => {
    return (
        <Container className="mt-2">
            <h1>REVIEWS</h1>
            <Row>
                <Col>
                    <Review />
                </Col>
                <Col>
                    <Review />
                </Col>
                <Col>
                    <Review />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Review />
                </Col>
                <Col>
                    <Review />
                </Col>
                <Col>
                    <Review />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Review />
                </Col>
                <Col>
                    <Review />
                </Col>
                <Col>
                    <Review />
                </Col>
            </Row>
        </Container>
    );
};

export default Reviews;
