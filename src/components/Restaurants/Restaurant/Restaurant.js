import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Card, Button } from "react-bootstrap";
import { TiStarFullOutline, TiStarHalfOutline } from "react-icons/ti";
import Stars from "../../Stars/Stars";

const Restaurant = (props) => {
    const [averageReview, setAverageReview] = useState(0);
    const [reviewCount, setReviewCount] = useState(0);

    useEffect(() => {
        averageRating();
    });

    function averageRating() {
        var avg_review = 0;
        var review_count = 0;
        if (!props.reviews) return;

        if (props.reviews !== undefined) {
            for (let i of props.reviews) {
                if (i !== undefined) {
                    review_count = review_count + 1;
                    avg_review = avg_review + i.review.rating;
                }
            }
            // console.log('props.reviews > > > ',  props.reviews)
            // console.log('average > > > ', avg_review)
            // console.log('count > > >', review_count)
            avg_review = avg_review / props.reviews.length;
        }

        setReviewCount(review_count);
        setAverageReview(avg_review);
    }

    const history = useHistory();

    function handleClick(e) {
        e.preventDefault();
        history.push(/restaurant/ + props.restaurant_id);
    }

    return (
        <Container>
            <Row>
                <Card className="shadow-sm p-3 mb-4 bg-white rounded">
                    <Card.Body>
                        <Card.Title>
                            {props.text} &nbsp; &nbsp;
                            <Stars value={averageReview} />
                            {/* <div
                                style={{
                                    display: "flex",
                                    lineHeight: 1.2,
                                    paddingBottom: "0.1em"
                                }}
                            >
                                {Array(Math.floor(averageReview + 0.25)) // <- gets the floor of average rounded to the nearest half
                                    .fill()
                                    .map((_, i) => (
                                        <small key={i}>
                                            <TiStarFullOutline />
                                        </small>
                                    ))}
                                <small>
                                    { // Double rating. Round to nearest integer. If odd then include half star; if even do not include.
                                    (Math.floor((averageReview * 2) + 0.5) % 2 === 1) && (
                                        <TiStarHalfOutline />
                                    )}
                                </small>
                            </div> */}
                            <h6>
                                <strong>{reviewCount}</strong> reviews
                            </h6>
                            <Button
                                variant="success"
                                className="btn-sm mb-2 mr-3"
                                onClick={handleClick}
                            >
                                Visit page
                            </Button>
                            {props.currentUser && props.currentUser.role === "ADMIN" && (
                                <Button
                                    variant="warning"
                                    className="btn-sm mb-2"
                                    onClick={() => history.push('/updaterestaurant/' + props.restaurant_id)}
                                >
                                    Edit
                                </Button>
                            )}
                        </Card.Title>
                        <Card.Subtitle className="mb-1 text-muted">
                            {props.cuisine}
                        </Card.Subtitle>
                        <Card.Text className="mb-1">
                            {props.description}
                        </Card.Text>
                        <Card.Text className="mb-1">
                            Location: {props.address}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    );
};

export default Restaurant;
