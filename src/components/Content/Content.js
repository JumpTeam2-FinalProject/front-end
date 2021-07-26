import React from "react";
import { useState, useEffect } from "react";
import { Container, Button, Col, Form, Row } from "react-bootstrap";
import classes from "./Content.module.css";
// import { v4 as uuid } from "uuid";
import { Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Reviews from "../Reviews/Reviews";

// const filterRestaurants = (rests, query) => {
//     if (!query) {
//         return rests;
//     }

//     return rests.filter((rest) => {
//         const restName = rest.name.toLowerCase();
//         return restName.includes(query);
//     });
// };

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
    const [restaurant, setRestaurant] = useState("");
    // const { search } = window.location;
    // const query = new URLSearchParams(search).get("s");
    // const filteredRestaurants = filterRestaurants(restaurants, query);
    // const [searchQuery, setSearchQuery] = useState(query || "");

    useEffect(() => {
        const restaurants = [
            { key: "sb", value: "sb", text: "Subway" },
            { key: "md", value: "md", text: "McDonald's" },
            { key: "rr", value: "rr", text: "Red Robin" },
            { key: "tb", value: "tb", text: "Taco Bell" },
            { key: "cf", value: "cf", text: "Chick-Fil-A" },
            { key: "wd", value: "wd", text: "Wendy's" },
            { key: "og", value: "og", text: "Olive Garden" },
            { key: "bk", value: "bk", text: "Burger King" },
            { key: "kf", value: "kf", text: "KFC" },
            { key: "dt", value: "dt", text: "Din Tai Fung" },
            { key: "dn", value: "dn", text: "Denny's" },
            { key: "pe", value: "pe", text: "Panda Express" },
        ].sort(compare);
        setRestaurants(restaurants);
    }, []);

    const getRestaurant = (e, { value }) => {
        console.log(value);
        setRestaurant(value);
    };

    // const sendToRestaurantPage = (e, { value }) => {
    //     e.preventDefault();
    //     alert("here");
    //     const link = "/" + value;
    //     console.log(link);
    // };

    return (
        <Container className={classes.Content} fluid>
            <Row>
                <Col xs={6} md={4}></Col>
                <Col xs={6} md={4}>
                    <Form className="d-flex mt-1 mr-2 mt-5 mw-0">
                        {/* <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2 mt-5 mw-0"
                            aria-label="Search"
                            name="s"
                            value={searchQuery}
                            onInput={(e) => setSearchQuery(e.target.value)}
                            searchable="Enter here..."
                        /> */}
                        <Dropdown
                            placeholder="Find restaurant!"
                            fluid
                            search
                            selection
                            options={restaurants}
                            onChange={getRestaurant}
                        />
                        <Button variant="light" type="submit">
                            <Link
                                to={"/" + restaurant}
                                style={{
                                    color: "black",
                                }}
                            >
                                Search
                            </Link>
                        </Button>
                    </Form>
                    <br />
                    <Reviews />
                </Col>
                <Col xs={6} md={4}></Col>
            </Row>
        </Container>
    );
};

export default Content;
