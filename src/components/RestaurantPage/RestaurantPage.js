import React from "react";
import { useState } from "react";
import { Card, Container, Image } from "react-bootstrap";
import bk from "../../assets/bk.jpg";
import Review from "../Reviews/Review/Review";
import "./RestaurantPage.module.css";

const RestaurantPage = () => {
    const [data, setData] = useState([]);

    const info = {
        review: "Best food ever!!",
        user: "Jim Nguyen",
        date: "07/26/2021",
        restaurant: "Burger King",
        cuisine: "Fast Food",
        description: "American burger chain",
        website: "https://www.mcdonalds.com/us/en-us.html",
        location: "USA",
    };

    return (
        <Container className="mt-2">
            <h1>Burger King</h1>
            <img src={bk} alt="bk" />

            <h1>Reviews</h1>
            <Review {...info} />
        </Container>
    );
};

export default RestaurantPage;
