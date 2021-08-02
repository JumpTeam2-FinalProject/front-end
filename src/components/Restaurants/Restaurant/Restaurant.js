import React, { useState, useEffect } from "react";
import { Container, Row, Card, Button } from "react-bootstrap";
import { TiStarFullOutline, TiStarHalfOutline } from "react-icons/ti";

const Restaurant = (props) => {

    const [averageReview, setAverageReview] = useState(0);
    const [reviewCount, setReviewCount] = useState(0);

    
    useEffect(() => {
        averageRating();
    }, []);

    if (!props) return;
    
    // let length = props.reviews.length; //FIXME: change to show correct length
    let length = 5;

    function averageRating() {
        var avg_review = 0;
        var review_count = 0;
        if (!props.reviews) return;

        for (let i of props.reviews) {
            if (i !== undefined) {
                console.log(i)
                review_count = review_count + 1;
                avg_review = avg_review + i.review.rating
            }
        }

        avg_review = avg_review / props.reviews.length

        setReviewCount(review_count);
        setAverageReview(avg_review);
    }

    const floorAverageReview = Math.floor(averageReview) || 0;

    return (
        <Container>
            <Row>
                <Card className="shadow-sm p-3 mb-4 bg-white rounded">
                    <Card.Body>
                        <Card.Title>
                            {props.text} &nbsp; &nbsp;
                            <div
                                style={{
                                    display: "flex",
                                }}
                            >
                                {Array(floorAverageReview) //FIXME: change 2 to props.review
                                    .fill()
                                    .map((_, i) => (
                                        <small key={i}>
                                            <TiStarFullOutline />
                                        </small>
                                    ))}
                                <h6>
                                    {(averageReview - floorAverageReview > 0.5)  ? (
                                        <TiStarHalfOutline />
                                    ) : null}
                                </h6>
                            </div>
                            <h6>
                                <strong>{reviewCount}</strong>{" "}
                                reviews
                            </h6>
                            <Button
                                variant="success"
                                className="btn-sm mb-2"
                                onClick={props.clicked}
                            >
                                Visit page
                            </Button>
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
