import React, { useState, useEffect } from "react";
import Restaurant from "./Restaurant/Restaurant";
import { Button, Container } from "react-bootstrap";
import { v4 as uuid } from "uuid";
import { useHistory } from "react-router";
import classes from "./Restaurants.module.css";

const Restaurants = () => {
    const [restaurants, setRestaurants] = useState([]);
    let history = useHistory();

    useEffect(() => {
        fetchRestaurants();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const sendToRestaurantPage = () => {
        history.push("/bk");
    };

    const fetchRestaurants = () => {
        fetch("http://localhost:8080/api/restaurant")
            .then((response) => response.json())
            .then((data) => {
                setRestaurants(data);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div className={classes.Restaurants}>
            <br />
            <br />
            <Container>
                <h1 className={classes.Header}>Restaurants</h1>
                <br />
                <br />
                {restaurants.map((restaurantInfo) => (
                    <Restaurant
                        key={uuid()}
                        {...restaurantInfo}
                        clicked={sendToRestaurantPage}
                    />
                ))}
            </Container>
        </div>
    );
};

export default Restaurants;
