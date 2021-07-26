import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../components/utility/utility";

const initialState = {
    reviews: [],
    review: {
        restaurant: "",
        rating: 0,
        reviewText: "",
    },
};

const addReview = (state, action) => {
    const updatedReviews = updateObject();
    return updateObject(state, { updatedReviews });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_REVIEW:
            return addReview(state, action);
        default:
            return state;
    }
};

export default reducer;
