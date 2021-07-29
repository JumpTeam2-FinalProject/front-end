import React from "react";
import { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import Restaurant from "../Restaurants/Restaurant/Restaurant";
import Review from "../Reviews/Review/Review";
import classes from "./RestaurantPage.module.css";
import { useHistory } from "react-router";

const RestaurantPage = (props) => {
    const [restaurants, setRestaurants] = useState([]);
    let history = useHistory();

    useEffect(() => {
        fetchRestaurants();
    }, []);

    // TODO: Fetch for specific restaurant
    const fetchRestaurants = () => {
        fetch("http://localhost:8080/api/restaurant") // FIXME: Change url
            .then((data) => {
                setRestaurants(data);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const sendToReviewForm = () => {
        history.push("/writereview");
    };

    return (
        <div className={classes.RestaurantPage}>
            <Container>
                <br />

                <span>
                    <h1 className={classes.Header}>Burger King</h1>
                    <Button
                        className={classes.Button}
                        variant="success"
                        onClick={sendToReviewForm}
                    >
                        Leave a review!
                    </Button>
                </span>
                <Restaurant {...restaurants} className="mt-5" />
                <h1 className={classes.SubHeader}>Reviews</h1>
                {/* TODO: Add reviews for specific restaurant */}
                {/* <Review {...info} /> */}
            </Container>
        </div>
    );
};

export default RestaurantPage;
