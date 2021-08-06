import React from "react";
import ReviewForm from "../ReviewForm/ReviewForm";
import classes from "./ReviewPage.module.css";

const ReviewPage = (props) => {
    return (
        <div className={classes.ReviewPage}>
            <br />
            <br />
            <ReviewForm {...props} />
        </div>
    );
};

export default ReviewPage;
