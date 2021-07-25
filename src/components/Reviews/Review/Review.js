import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import { TiStarFullOutline, TiStarHalfOutline } from "react-icons/ti";

const Review = (props) => {
    return (
        <Container>
            <Row>
                <Card className="shadow-sm p-3 mb-5 bg-white rounded">
                    <Card.Header>
                        <span
                            style={{
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            Best Food Ever!! &nbsp; <TiStarFullOutline />
                            &nbsp;
                            <TiStarFullOutline /> &nbsp;
                            <TiStarHalfOutline />
                        </span>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>McDonald's</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            Fast Food
                        </Card.Subtitle>
                        <Card.Text>American burger chain</Card.Text>
                        <Card.Link href="#">Website</Card.Link>
                        <Card.Link href="#">Location</Card.Link>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    );
};

export default Review;
