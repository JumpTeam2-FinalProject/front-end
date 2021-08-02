import React from "react";
import { Container } from "react-bootstrap";
import Reviews from "../Reviews/Reviews";
import classes from "./ReviewsPage.module.css";

const ReviewsPage = () => {
    return (
        <div className={classes.ReviewsPage}>
            <Container>
                <br />
                <h1 className={classes.Header}>Recent Reviews</h1>
                <Reviews />
            </Container>
        </div>
    );
};

export default ReviewsPage;
