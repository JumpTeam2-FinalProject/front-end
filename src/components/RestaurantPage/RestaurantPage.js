import React from "react";
import { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import Restaurant from "../Restaurants/Restaurant/Restaurant";
import Review from "../Reviews/Review/Review";
import classes from "./RestaurantPage.module.css";
import { useHistory } from "react-router";
import Spinner from "../UI/Spinner/Spinner";
import { v4 as uuid } from "uuid";
import { doFetch } from "../../utility";

const RestaurantPage = (props) => {
    const [restaurant, setRestaurant] = useState([]);
    const [loading, setLoading] = useState(true);
    const [reviews, setReviews] = useState([]);
    let history = useHistory();

    const { setRestaurantToReviewId } = props;

    useEffect(() => {
        fetchRestaurant();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const fetchRestaurant = () => {
        doFetch("restaurant/" + props.match.params.id)
            .then((response) => response.json())
            .then((data) => {
                setLoading(false);
                setRestaurant(data);
                setReviews(data.reviews);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const sendToReviewForm = () => {
        setRestaurantToReviewId(restaurant.restaurant_id);
        history.push("/writereview");
    };

    return (
        <div className={classes.RestaurantPage}>
            <Container>
                <br />
                {loading ? (
                    <Spinner />
                ) : (
                    <>
                        <span>
                            <h1 className={classes.Header}>
                                {restaurant.text}
                            </h1>
                            <Button
                                className={classes.Button}
                                variant="success"
                                onClick={sendToReviewForm}
                            >
                                Leave a review!
                            </Button>
                        </span>
                        <Restaurant
                            {...restaurant}
                            total={reviews.length}
                            rating={
                                reviews.reduce(
                                    (sum, { rating }) => sum + rating,
                                    0
                                ) / reviews.length
                            }
                            className="mt-5"
                            currentUser={props.currentUser}
                        />
                        <h1 className={classes.SubHeader}>Reviews</h1>
                        {reviews.map((review) => (
                            <Review key={uuid()} {...review} {...restaurant} />
                        ))}
                    </>
                )}
            </Container>
        </div>
    );
};

export default RestaurantPage;
