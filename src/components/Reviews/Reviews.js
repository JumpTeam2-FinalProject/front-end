import React from "react";
import { Container } from "react-bootstrap";
import Review from "./Review/Review";

const Reviews = () => {
    return (
        <Container className="mt-2">
            <h2 style={{ textAlign: "center" }}>Recent Reviews</h2>
            <br />
            <Review />
            <Review />
            <Review />
        </Container>
    );
};

export default Reviews;
