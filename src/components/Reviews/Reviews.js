import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Review from "./Review/Review";
import { v4 as uuid } from "uuid";
import Spinner from "../UI/Spinner/Spinner";

const Reviews = (props) => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchReviews();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const fetchReviews = () => {
        fetch("http://localhost:8080/api/reviews")
            .then((response) => response.json())
            .then(__reviews => {
                setLoading(false);
                shuffleArray(__reviews);
                setReviews(__reviews);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    };

    console.log(reviews)

    return (
        <Container>
            <br />
            {loading ? (
                <Spinner />
            ) : (
                reviews
                    .slice(0, 10)
                    .map(({ review, restaurant, user }) => (
                        <Review
                            key={review.review_id}
                            {...review}
                            {...restaurant}
                            {...user}
                        />
                    ))
            )}
        </Container>
    );
};

export default Reviews;
