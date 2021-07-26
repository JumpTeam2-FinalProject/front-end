import React from "react";
import { Container, Row, Card, Button } from "react-bootstrap";
import { TiStarFullOutline, TiStarHalfOutline } from "react-icons/ti";

const Restaurant = (props) => {
    return (
        <Container>
            <Row>
                <Card className="shadow-sm p-3 mb-4 bg-white rounded">
                    <Card.Body>
                        <Card.Title>
                            {props.restaurant} &nbsp; &nbsp;
                            <div
                                style={{
                                    display: "flex",
                                }}
                            >
                                {Array(Math.floor(props.rating))
                                    .fill()
                                    .map((_, i) => (
                                        <small key={i}>
                                            <TiStarFullOutline />
                                        </small>
                                    ))}
                                <h6>
                                    {props.rating % 1 !== 0 ? (
                                        <TiStarHalfOutline />
                                    ) : null}
                                </h6>
                            </div>
                            <h6>
                                {props.number > 0 ? props.number : 0} reviews
                            </h6>
                            <Button
                                variant="success"
                                className="btn-sm mb-2"
                                onClick={props.clicked}
                            >
                                Visit page
                            </Button>
                        </Card.Title>
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

export default Restaurant;
