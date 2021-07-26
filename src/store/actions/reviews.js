import * as actionTypes from "./actionTypes";

export const addReview = (review) => {
    return {
        type: actionTypes.ADD_REVIEW,
        review: review,
    };
};
