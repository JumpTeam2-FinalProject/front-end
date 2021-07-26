import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import { TiStarFullOutline, TiStarHalfOutline } from "react-icons/ti";

const Review = (props) => {
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
                            <em>"{props.review}"</em> &nbsp; &nbsp;
                            <TiStarFullOutline /> &nbsp;
                            <TiStarFullOutline /> &nbsp;
                            <TiStarHalfOutline />
                        </span>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>{props.restaurant}</Card.Title>
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
