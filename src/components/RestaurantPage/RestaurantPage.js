import React from "react";
// import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import Restaurant from "../Restaurants/Restaurant/Restaurant";
import Review from "../Reviews/Review/Review";
import classes from "./RestaurantPage.module.css";
import { useHistory } from "react-router";

const RestaurantPage = (props) => {
    // const [data, setData] = useState([]);
    let history = useHistory();

    console.log("HELLO" + props.match.params.id);

    // TODO: Get data from database
    const info = {
        comment: "Best food ever!!",
        user: "Jim Nguyen",
        date: "07/26/2021",
        restaurant: "Burger King",
        cuisine: "Fast Food",
        rating: 3.5,
        number: 178,
        description: "American burger chain",
        website: "https://www.mcdonalds.com/us/en-us.html",
        location: "USA",
    };

    // const burgerking = {
    //     restaurant: "Burger King",
    //     cuisine: "Fast Food",
    //     location: "USA",
    //     rating: 4.5,
    //     number: 178,
    //     description: "American burger chain",
    //     website: "https://www.bk.com/",
    // };

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
                <Restaurant {...info} className="mt-5" />
                <h1 className={classes.SubHeader}>Reviews</h1>
                <Review {...info} />
            </Container>
        </div>
    );
};

export default RestaurantPage;
