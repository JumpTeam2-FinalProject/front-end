import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Review from "./Review/Review";

const Reviews = (props) => {
    const [data, setData] = useState([]);

    const info = {
        review: "Best food ever!!",
        user: "Jim Nguyen",
        date: "07/26/2021",
        restaurant: "McDonald's",
        cuisine: "Fast Food",
        number: 123,
        description: "American burger chain",
        website: "https://www.mcdonalds.com/us/en-us.html",
        location: "USA",
    };

    useEffect(() => {
        setData(info);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Container>
            <br />
            <Review {...data} />
            <Review {...data} />
            <Review {...data} />
        </Container>
    );
};

export default Reviews;
