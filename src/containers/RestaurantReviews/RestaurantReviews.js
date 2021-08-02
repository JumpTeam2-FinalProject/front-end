import React, { useEffect, useState } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import Login from "../../components/Login/Login";
import ReviewsPage from "../../components/ReviewsPage/ReviewsPage";
import Layout from "../../components/Layout/Layout";
import Home from "../../components/Home/Home";
import Account from "../../components/Account/Account";
import ReviewPage from "../../components/ReviewPage/ReviewPage";
import SignUp from "../../components/SignUp/SignUp";
import Restaurants from "../../components/Restaurants/Restaurants";
import RestaurantPage from "../../components/RestaurantPage/RestaurantPage";
import { deleteToken, saveToken } from "../../utility/jwt";
import { registerRedirectToLogin } from "../../utility";

const RestaurantReviews = () => {

    const history = useHistory();
    const goToLogin = () => history.push("/login");
    const goHome = () => history.push("/");
    useEffect(() => {
        registerRedirectToLogin(goToLogin);
    }, []);

    const [currentUser, setCurrentUser] = useState(null);

    const handleLogin = ({ jwt, user }) => {
        saveToken(jwt);
        setCurrentUser(user);
        goHome();
    };
    const logout = () => {
        deleteToken();
        setCurrentUser(null);
        goHome();
    };

    // the following 2 properties are passed as props to every component rendered by this page (both routes and layout)
    const accountRelatedProps = { currentUser, setCurrentUser };

    const routeRenderFactory = (ComponentToRender, extraProps = {}) => (
        _props => <ComponentToRender {..._props} {...accountRelatedProps} {...extraProps} />
    );

    let routes = (
        <Switch>
            <Route path="/" exact render={routeRenderFactory(Home)} />
            <Route path="/reviews" render={routeRenderFactory(ReviewsPage)} />
            <Route path="/login" render={routeRenderFactory(Login, { handleLogin })} />
            <Route path="/account" render={routeRenderFactory(Account)} />
            <Route path="/writereview" render={routeRenderFactory(ReviewPage)} />
            <Route path="/signup" render={routeRenderFactory(SignUp, { handleLogin })} />
            <Route path="/restaurants" render={routeRenderFactory(Restaurants)} />
            <Route path="/restaurant/:id" render={routeRenderFactory(RestaurantPage)} />
            <Redirect to="/" />
        </Switch>
    );
    return <Layout {...accountRelatedProps}>{routes}</Layout>;
};

export default RestaurantReviews;
