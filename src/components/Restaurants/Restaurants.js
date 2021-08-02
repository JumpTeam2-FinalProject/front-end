import React, { useState, useEffect } from "react";
import Restaurant from "./Restaurant/Restaurant";
import { Container } from "react-bootstrap";
import { v4 as uuid } from "uuid";
import { useHistory } from "react-router";
import classes from "./Restaurants.module.css";
import { doFetch } from "../../utility";
import Spinner from "../UI/Spinner/Spinner";

const Restaurants = (props) => {
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);
    let history = useHistory();

    useEffect(() => {
        fetchRestaurants();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const sendToRestaurantPage = () => {
        history.push("/restaurant/" + props.match.params.id);
    };

    const fetchRestaurants = () => {
        doFetch("restaurants")
            .then((response) => response.json())
            .then((data) => {
                setRestaurants(data);
                setLoading(!loading);
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
                {loading ? (
                    <Spinner />
                ) : (
                    restaurants.map((restaurantInfo) => (
                        <Restaurant
                            key={uuid()}
                            {...restaurantInfo}
                            // rating={
                            //     restaurantInfo.reviews.reduce(
                            //         (sum, { rating }) => sum + rating,
                            //         0
                            //     ) / restaurantInfo.reviews.length
                            // }
                            clicked={sendToRestaurantPage}
                        />
                    ))
                )}
            </Container>
        </div>
    );
};

export default Restaurants;
