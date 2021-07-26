import React, { useState, useEffect } from "react";
import Restaurant from "./Restaurant/Restaurant";
import { Button, Container } from "react-bootstrap";
import { v4 as uuid } from "uuid";
import { useHistory } from "react-router";

const Restaurants = () => {
    const [restaurants, setRestaurants] = useState([]);
    let history = useHistory();

    useEffect(() => {
        const burgerking = {
            restaurant: "Burger King",
            cuisine: "Fast Food",
            location: "USA",
            rating: 4.5,
            number: 178,
            description: "American burger chain",
            website: "https://www.bk.com/",
        };
        setRestaurants([...restaurants, burgerking]);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const addSubway = () => {
        const subway = {
            restaurant: "Subway",
            cuisine: "Fast Food",
            location: "USA",
            rating: 3,
            number: 213,
            description: "American sandwich chain",
            website: "https://www.subway.com/en-us",
        };

        setRestaurants([...restaurants, subway]);
    };

    const addMcdonalds = () => {
        const mcdonalds = {
            restaurant: "McDonald's",
            cuisine: "Fast Food",
            location: "USA",
            rating: 5.5,
            number: 896,
            description: "American burger chain",
            website: "https://www.mcdonalds.com/us/en-us.html",
        };
        setRestaurants([...restaurants, mcdonalds]);
    };

    const sendToRestaurantPage = () => {
        history.push("/bk");
    };

    return (
        <Container className="mt-2">
            <h2>All Restaurants</h2>
            <Button className="mt-2" onClick={addMcdonalds}>
                Add McDonalds
            </Button>
            <Button className="ms-2 mt-2" onClick={addSubway}>
                Add Subway
            </Button>
            <br />
            <br />
            {restaurants.map((rest) => (
                <Restaurant
                    key={uuid()}
                    {...rest}
                    onClick={sendToRestaurantPage}
                />
            ))}
        </Container>
    );
};

export default Restaurants;
