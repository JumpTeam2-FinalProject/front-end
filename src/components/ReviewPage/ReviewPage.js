import React from "react";
import ReviewForm from "../ReviewForm/ReviewForm";
import classes from "./ReviewPage.module.css";

const ReviewPage = () => {
    return (
        <div className={classes.ReviewPage}>
            <br />
            <br />
            <ReviewForm />
        </div>
    );
};

export default ReviewPage;
