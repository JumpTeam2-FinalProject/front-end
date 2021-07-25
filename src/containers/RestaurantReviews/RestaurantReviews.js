import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../../components/Login/Login";
import Reviews from "../../components/Reviews/Reviews";
import Layout from "../../components/Layout/Layout";
import Content from "../../components/Content/Content";
import Account from "../../components/Account/Account";

const RestaurantReviews = () => {
    let routes = (
        <Switch>
            <Route path="/" exact component={Content} />
            <Route path="/reviews" component={Reviews} />
            <Route path="/login" component={Login} />
            <Route path="/account" component={Account} />
        </Switch>
    );
    return <Layout>{routes}</Layout>;
};

export default RestaurantReviews;
