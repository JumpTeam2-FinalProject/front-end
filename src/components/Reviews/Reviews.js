import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Review from "./Review/Review";
import { v4 as uuid } from "uuid";
import Spinner from "../UI/Spinner/Spinner";

const Reviews = (props) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [reviews, setReviews] = useState([]);

    const info = {
        review: "Best food ever!!",
        user: "Jim Nguyen",
        date: "07-28-2021",
        restaurant: "McDonald's",
        cuisine: "Fast Food",
        number: 123,
        description: "American burger chain",
        rating: 5,
        website: "https://www.mcdonalds.com/us/en-us.html",
        location: "USA",
    };

    useEffect(() => {
        fetchReview();
        // setData(info);
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

    // const fetchUser = () => {
    //     fetch("http://localhost:8080/api/user")
    // }

    return (
        <Container>
            <br />
            {loading ? (
                <Spinner />
            ) : (
                data.map((review) => <Review key={uuid()} {...review} />)
            )}
        </Container>
    );
};

export default Reviews;
