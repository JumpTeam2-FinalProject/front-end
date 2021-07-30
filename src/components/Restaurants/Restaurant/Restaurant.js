import React from "react";
import { Container, Row, Card, Button } from "react-bootstrap";
import { TiStarFullOutline, TiStarHalfOutline } from "react-icons/ti";

const Restaurant = (props) => {
    let length = props.reviews.length;

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
                                {Array(Math.floor(2)) //FIXME: change 2 to props.review
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
                                <strong>{length > 0 ? length : 0}</strong>{" "}
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
