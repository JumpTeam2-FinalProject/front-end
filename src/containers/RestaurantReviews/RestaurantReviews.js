import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "../../components/Login/Login";
import ReviewsPage from "../../components/ReviewsPage/ReviewsPage";
import Layout from "../../components/Layout/Layout";
import Home from "../../components/Home/Home";
import Account from "../../components/Account/Account";
import ReviewPage from "../../components/ReviewPage/ReviewPage";
import SignUp from "../../components/SignUp/SignUp";
import Restaurants from "../../components/Restaurants/Restaurants";
import RestaurantPage from "../../components/RestaurantPage/RestaurantPage";

const RestaurantReviews = () => {

    const [currentUser, setCurrentUser] = useState();

    // the following 2 properties are passed as props to every component rendered by this page (both routes and layout)
    const accountRelatedProps = { currentUser, setCurrentUser };

    const routeRenderFactory = ComponentToRender => (
        (_props) => <ComponentToRender {..._props} {...accountRelatedProps} />
    );

    let routes = (
        <Switch>
            <Route path="/" exact render={routeRenderFactory(Home)} />
            <Route path="/reviews" render={routeRenderFactory(ReviewsPage)} />
            <Route path="/login" render={routeRenderFactory(Login)} />
            <Route path="/account" render={routeRenderFactory(Account)} />
            <Route path="/writereview" render={routeRenderFactory(ReviewPage)} />
            <Route path="/signup" render={routeRenderFactory(SignUp)} />
            <Route path="/restaurants" render={routeRenderFactory(Restaurants)} />
            <Route path="/restaurant/:id" render={routeRenderFactory(RestaurantPage)} />
            <Redirect to="/" />
        </Switch>
    );
    return <Layout {...accountRelatedProps}>{routes}</Layout>;
};

export default RestaurantReviews;
