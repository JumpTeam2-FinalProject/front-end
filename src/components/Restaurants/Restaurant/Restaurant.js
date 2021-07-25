import React from "react";
import { Container, Row, Card } from "react-bootstrap";
import { TiStarFullOutline, TiStarHalfOutline } from "react-icons/ti";

const Restaurant = (props) => {
    return (
        <Container>
            <Row>
                <Card className="shadow-sm p-3 mb-5 bg-white rounded">
                    <Card.Body>
                        <Card.Title>
                            {props.restaurant} &nbsp; &nbsp;
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                {Array(Math.floor(props.rating))
                                    .fill()
                                    .map((_, i) => (
                                        <p key={i}>
                                            <TiStarFullOutline />
                                        </p>
                                    ))}
                                <p>
                                    {props.rating % 1 !== 0 ? (
                                        <TiStarHalfOutline />
                                    ) : null}
                                </p>
                            </div>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            {props.cuisine}
                        </Card.Subtitle>
                        <Card.Text>{props.description}</Card.Text>
                        <Card.Link href={props.website} target="_blank">
                            Website
                        </Card.Link>
                        <Card.Text>Location: {props.location}</Card.Text>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    );
};

export default Restaurant;
