import React from "react";
import { Container } from "react-bootstrap";
import Review from "./Review/Review";

const Reviews = () => {
    return (
        <Container className="mt-2">
            <h1>REVIEWS</h1>
            <Review />
            <Review />
            <Review />
        </Container>
    );
};

export default Reviews;
