import React from "react";
import { useState } from "react";
import ReviewForm from "../ReviewForm/ReviewForm";
import { Card, Container } from "react-bootstrap";
import classes from "./ReviewPage.module.css";
import { v4 as uuid } from "uuid";
import Review from "../Reviews/Review/Review";

const ReviewPage = () => {
    const [review, setReview] = useState([]);
    const [created, setCreated] = useState(false);

    const writeReview = (event, { restaurant, rating, comment }) => {
        const review = {
            restaurant: restaurant,
            rating: rating,
            comment: comment,
            user: "Jim Nguyen",
            date: "07/26/2021",
            cuisine: "Fast Food",
            number: 123,
            description: "American burger chain",
            website: "https://www.mcdonalds.com/us/en-us.html",
            location: "USA",
        };
        setReview(review);
        setCreated(!created);
        console.log("REVIEW: " + review);
        event.preventDefault();
        event.stopPropagation();
    };

    return (
        <div className={classes.ReviewPage}>
            <br />
            <br />
            <ReviewForm fetchReview={writeReview} />
            {created ? <Review {...review} /> : null}
            {/* <Container>
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
            </Container> */}
        </div>
    );
};

export default ReviewPage;
