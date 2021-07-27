import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "../../components/Login/Login";
import ReviewsPage from "../../components/ReviewsPage/ReviewsPage";
import Layout from "../../components/Layout/Layout";
import Content from "../../components/Content/Content";
import Account from "../../components/Account/Account";
import ReviewPage from "../../components/ReviewPage/ReviewPage";
import SignUp from "../../components/SignUp/SignUp";
import Restaurants from "../../components/Restaurants/Restaurants";
import RestaurantPage from "../../components/RestaurantPage/RestaurantPage";

const RestaurantReviews = () => {
    let routes = (
        <Switch>
            <Route path="/" exact component={Content} />
            <Route path="/reviews" component={ReviewsPage} />
            <Route path="/login" component={Login} />
            <Route path="/account" component={Account} />
            <Route path="/writereview" component={ReviewPage} />
            <Route path="/signup" component={SignUp} />
            <Route path="/restaurants" component={Restaurants} />
            <Route path="/bk" component={RestaurantPage} />
            <Redirect to="/" />
        </Switch>
    );
    return <Layout>{routes}</Layout>;
};

export default RestaurantReviews;
