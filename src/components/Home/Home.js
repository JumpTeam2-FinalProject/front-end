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
        fetchRestaurants();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getRestaurantId = (event, { value }) => {
        setRestaurantId(value);
    };

    const fetchRestaurants = () => {
        fetch("http://localhost:8080/api/restaurants")
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
                <Col xs={0} sm={1} md={2} lg={3} />
                <Col xs={12} sm={10} md={8} lg={6}>
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
                <Col xs={0} sm={1} md={2} lg={3} />
            </Row>
        </Container>
    );
};

export default Content;
