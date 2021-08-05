import React from "react";
import { Card, Container, Row, Button } from "react-bootstrap";
import { TiStarFullOutline, TiStarHalfOutline } from "react-icons/ti";

const calculateHasHalfStar = rating => {
    const roundedDoubledRating =  Math.floor((rating * 2) + 0.5);
    return roundedDoubledRating % 2 !== 0;
};

const Review = (props) => {
    var first = null;
    var last = null;
    var date = null;
    var rating = null;
    var review = null;

    if (props.clicked != null) {
        first =
            props.firstName.charAt(0).toUpperCase() + props.firstName.slice(1);
        last = props.lastName.charAt(0).toUpperCase() + props.lastName.slice(1);
        date = props.date;
        rating = props.rating;
        review = props.review;
    } else {
        first =
            props.user.firstName.charAt(0).toUpperCase() +
            props.user.firstName.slice(1);
        last =
            props.user.lastName.charAt(0).toUpperCase() +
            props.user.lastName.slice(1);
        date = props.review.date;
        rating = props.review.rating;
        review = props.review.review;
    }

    return (
        <Container>
            <Row>
                <Card className="shadow-sm p-3 mb-5 bg-white rounded">
                    <Card.Header className="ms-2 pt-3 pb-3">
                        <span>
                            <p>
                                {first} {last}&nbsp; - &nbsp;
                                {date}
                            </p>
                        </span>{" "}
                        <div
                            style={{
                                display: "flex",
                                marginBottom: "5px",
                            }}
                        >
                            {Array(Math.floor(rating))
                                .fill()
                                .map((_, i) => (
                                    <small key={i}>
                                        <TiStarFullOutline />
                                    </small>
                                ))
                            }
                            <small>
                                { // Double rating. Round to nearest integer. If odd then include half star; if even do not include.
                                (Math.floor((rating * 2) + 0.5) % 2 === 1) && (
                                    <TiStarHalfOutline />
                                )}
                            </small>
                        </div>
                        <span
                            style={{
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <em>"{review}"</em> &nbsp; &nbsp;
                        </span>
                    </Card.Header>
                    <Card.Body className="mb-0">
                        <Card.Title>
                            {props.text}
                            <Card.Subtitle className="mt-1 mb-1 text-muted">
                                {props.cuisine}
                            </Card.Subtitle>
                        </Card.Title>
                        <Button
                            variant="success"
                            className="btn-sm mb-2"
                            onClick={props.clicked}
                        >
                            Visit page
                        </Button>
                        <Card.Text className="mb-1">
                            Location: {props.address}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    );
};

export default Review;
