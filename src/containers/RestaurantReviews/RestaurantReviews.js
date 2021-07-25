import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../../components/Login/Login";
import Reviews from "../../components/Reviews/Reviews";
import Layout from "../../components/Layout/Layout";
import Content from "../../components/Content/Content";
import Account from "../../components/Account/Account";
import ReviewPage from "../../components/ReviewPage/ReviewPage";
import SignUp from "../../components/SignUp/SignUp";

const RestaurantReviews = () => {
    let routes = (
        <Switch>
            <Route path="/" exact component={Content} />
            <Route path="/reviews" component={Reviews} />
            <Route path="/login" component={Login} />
            <Route path="/account" component={Account} />
            <Route path="/writereview" component={ReviewPage} />
            <Route path="/signup" component={SignUp} />
        </Switch>
    );
    return <Layout>{routes}</Layout>;
};

export default RestaurantReviews;
