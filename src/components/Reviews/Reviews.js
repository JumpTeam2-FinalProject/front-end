import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Review from "./Review/Review";
import Spinner from "../UI/Spinner/Spinner";
import { doFetch } from "../../utility";
import { useHistory } from "react-router";

const Reviews = (props) => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    let history = useHistory();

    useEffect(() => {
        fetchReviews();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const fetchReviews = () => {
        doFetch("/reviews")
            .then((response) => response.json())
            .then((__reviews) => {
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

    const clickHandler = ({ restaurant_id }) => {
        history.push("/restaurant/" + restaurant_id);
    };

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
                            clicked={() => clickHandler(restaurant)}
                        />
                    ))
            )}
        </Container>
    );
};

export default Reviews;
