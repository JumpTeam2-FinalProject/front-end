import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Review from "./Review/Review";
import { v4 as uuid } from "uuid";
import Spinner from "../UI/Spinner/Spinner";

const Reviews = (props) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [restaurant, setRestaurant] = useState([]);
    // const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchReview();
        fetchRestaurant();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const fetchReview = () => {
        fetch("http://localhost:8080/api/reviews")
            .then((response) => response.json())
            .then((data) => {
                setLoading(!loading);
                setData(data);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const fetchRestaurant = () => {
        fetch("http://localhost:8080/api/restaurant")
            .then((response) => response.json())
            .then((data) => {
                setRestaurant(data);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    // const fetchUser = () => {
    //     fetch("http://localhost:8080/api/user")
    // }

    return (
        <Container>
            <br />
            {loading ? (
                <Spinner />
            ) : (
                data.map((review) => (
                    <Review key={uuid()} {...review} {...restaurant} />
                ))
            )}
        </Container>
    );
};

export default Reviews;
