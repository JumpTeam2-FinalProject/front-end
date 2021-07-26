import React, { useState, useEffect } from "react";
import Restaurant from "./Restaurant/Restaurant";
import { Button, Container } from "react-bootstrap";
import { v4 as uuid } from "uuid";

const Restaurants = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        const tacobell = {
            restaurant: "Taco Bell",
            cuisine: "Fast Food",
            location: "USA",
            rating: 4.5,
            description: "American mexican food chain",
            website: "https://www.tacobell.com/",
        };
        setRestaurants([...restaurants, tacobell]);
    }, []);

    const addSubway = () => {
        const subway = {
            restaurant: "Subway",
            cuisine: "Fast Food",
            location: "USA",
            rating: 3,
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
            description: "American burger chain",
            website: "https://www.mcdonalds.com/us/en-us.html",
        };
        setRestaurants([...restaurants, mcdonalds]);
    };

    return (
        <Container className="mt-2">
            <Button className="mb-2" onClick={addMcdonalds}>
                Add McDonalds
            </Button>
            <Button className="ms-2 mb-2" onClick={addSubway}>
                Add Subway
            </Button>
            {restaurants.map((rest) => (
                <Restaurant key={uuid()} {...rest} />
            ))}
        </Container>
    );
};

export default Restaurants;
