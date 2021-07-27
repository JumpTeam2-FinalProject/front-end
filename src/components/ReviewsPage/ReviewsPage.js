import React from "react";
import Reviews from "../Reviews/Reviews";
import classes from "./ReviewsPage.module.css";

const ReviewsPage = () => {
    return (
        <div className={classes.ReviewsPage}>
            <br />
            <h1 className={classes.Header}>Recent Reviews</h1>
            <Reviews />
        </div>
    );
};

export default ReviewsPage;
