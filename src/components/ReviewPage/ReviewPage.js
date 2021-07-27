import React from "react";
import { useState } from "react";
import ReviewForm from "../ReviewForm/ReviewForm";
import { Card, Container } from "react-bootstrap";
import classes from "./ReviewPage.module.css";
import { v4 as uuid } from "uuid";

const ReviewPage = () => {
    const [review, setReview] = useState([]);

    const writeReview = (event, { restaurant, rating, comment }) => {
        const review = [
            {
                restaurant: restaurant,
                rating: rating,
                comment: comment,
            },
        ];
        setReview(review);
        console.log(review);
        event.preventDefault();
        event.stopPropagation();
    };

    return (
        <div className={classes.ReviewPage}>
            <br />
            <br />
            <ReviewForm fetchReview={writeReview} />
            <Container>
                <Card>
                    <h1>List</h1>
                    <ul>
                        {review.map((review) => (
                            <li key={uuid()}>
                                {review.restaurant +
                                    " " +
                                    review.rating +
                                    " " +
                                    review.comment}
                            </li>
                        ))}
                    </ul>
                </Card>
            </Container>
        </div>
    );
};

export default ReviewPage;
