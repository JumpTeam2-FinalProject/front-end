import React from "react";
import { Card, Container, Row } from "react-bootstrap";

const Review = (props) => {
    return (
        <Container>
            <h2>Review</h2>
            <Row>
                <Card style={{ width: "18rem" }}>
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
