import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Review from "./Review/Review";

const Reviews = (props) => {
    const [data, setData] = useState([]);
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
        // const myHeaders = new Headers();
        // myHeaders.append(
        //     "Authorization",
        //     "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjI3NTA3OTEwLCJpYXQiOjE2Mjc1MDA3MTB9.mJj_yOJLye_UYmYoodOVh9JYreCHZN-9dec3g3CnvY0"
        // );
        // myHeaders.append("Content-Type", "application/json");
        fetch("http://localhost:8080/api/reviews")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setData(data);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <Container>
            <br />
            <Review {...data} />
            <Review {...data} />
            <Review {...data} />
        </Container>
    );
};

export default Reviews;
