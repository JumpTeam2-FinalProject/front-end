import React from "react";
import { useState, useEffect } from "react";
import { Container, Button, Col, Form, Row } from "react-bootstrap";
import classes from "./Home.module.css";
import { Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Reviews from "../Reviews/Reviews";

const compare = (a, b) => {
    if (a.text < b.text) {
        return -1;
    }
    if (a.text > b.text) {
        return 1;
    }
    return 0;
};

const Content = (props) => {
    const [restaurants, setRestaurants] = useState([]);
    const [restaurantId, setRestaurantId] = useState("");

    useEffect(() => {
        // TODO: Get restaurants from db
        // const restaurants = [
        //     { key: "sb", value: "sb", text: "Subway" },
        //     { key: "md", value: "md", text: "McDonald's" },
        //     { key: "tb", value: "3", text: "Taco Bell" },
        //     { key: "bk", value: "4", text: "Burger King" },
        //     { key: "rr", value: "rr", text: "Red Robin" },
        //     { key: "cf", value: "cf", text: "Chick-Fil-A" },
        //     { key: "wd", value: "wd", text: "Wendy's" },
        //     { key: "og", value: "og", text: "Olive Garden" },
        //     { key: "kf", value: "kf", text: "KFC" },
        //     { key: "dt", value: "dt", text: "Din Tai Fung" },
        //     { key: "dn", value: "dn", text: "Denny's" },
        //     { key: "pe", value: "pe", text: "Panda Express" },
        // ].sort(compare);
        fetchRestaurants();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getRestaurantId = (event, { value }) => {
        setRestaurantId(value);
    };

    const fetchRestaurants = () => {
        fetch("http://localhost:8080/api/restaurant")
            .then((response) => response.json())
            .then((restaurants) => {
                storeRestaurants(restaurants);
            })
            .catch((err) => console.error(err));
    };

    const storeRestaurants = (restaurants) => {
        const restaurantsArray = [];
        restaurants.map(({ text, restaurant_id }) =>
            restaurantsArray.push({
                text,
                key: restaurant_id,
                value: restaurant_id,
            })
        );
        restaurantsArray.sort(compare);
        setRestaurants(restaurantsArray);
    };

    return (
        <Container className={classes.Content} fluid>
            <Row>
                <Col xs={2} md={4}></Col>
                <Col xs={8} md={4}>
                    <Form className="d-flex mt-1 mr-2 mt-5 mw-0">
                        <Dropdown
                            placeholder="Find restaurant!"
                            fluid
                            search
                            selection
                            options={restaurants}
                            onChange={getRestaurantId}
                        />
                        <Button variant="light" type="submit">
                            <Link
                                to={"/restaurant/" + restaurantId}
                                style={{
                                    color: "black",
                                }}
                            >
                                Search
                            </Link>
                        </Button>
                    </Form>
                    <h2 style={{ textAlign: "center" }}>Recent Reviews</h2>
                    <Reviews />
                </Col>
                <Col xs={2} md={4}></Col>
            </Row>
        </Container>
    );
};

export default Content;
