import React from "react";
import { Card, Container, Row, Button } from "react-bootstrap";
import { TiStarFullOutline, TiStarHalfOutline } from "react-icons/ti";

const Review = (props) => {
    let rating = props.rating > 0 ? props.rating : 0;
    return (
        <Container>
            <Row>
                <Card className="shadow-sm p-3 mb-5 bg-white rounded">
                    <Card.Header>
                        <span>
                            {props.user} - {props.date}
                        </span>
                        <span
                            style={{
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <em>"{props.comment}"</em> &nbsp; &nbsp;
                            {/* <TiStarFullOutline /> &nbsp;
                            <TiStarFullOutline /> &nbsp;
                            <TiStarHalfOutline /> */}
                            <div
                                style={{
                                    display: "flex",
                                }}
                            >
                                {Array(Math.floor(rating))
                                    .fill()
                                    .map((_, i) => (
                                        <small key={i}>
                                            <TiStarFullOutline />
                                        </small>
                                    ))}
                                <small>
                                    {rating % 1 !== 0 ? (
                                        <TiStarHalfOutline />
                                    ) : null}
                                </small>
                            </div>
                        </span>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>{props.restaurant}</Card.Title>
                        <Button
                            variant="success"
                            className="btn-sm mb-2"
                            onClick={props.clicked}
                        >
                            Visit page
                        </Button>
                        <p>{props.number > 0 ? props.number : 0} reviews</p>
                        <Card.Subtitle className="mb-2 text-muted">
                            {props.cuisine}
                        </Card.Subtitle>
                        <Card.Text>{props.description}</Card.Text>
                        <Card.Text>Location: {props.location}</Card.Text>
                        <Card.Link href={props.website} target="_blank">
                            Website
                        </Card.Link>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    );
};

export default Review;
