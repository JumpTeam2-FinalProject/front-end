import React from "react";
import {
    Container,
    Button,
    Col,
    Form,
    FormControl,
    Row,
} from "react-bootstrap";
import classes from "./Content.module.css";

const Content = () => {
    return (
        <Container className={classes.Content} fluid>
            <Row>
                <Col xs={6} md={4}></Col>
                <Col xs={6} md={4}>
                    <Form className="d-flex mt-1">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2 mt-5 mw-0"
                            aria-label="Search"
                        />
                        <Button className="mt-5" variant="light">
                            Search
                        </Button>
                    </Form>
                </Col>
                <Col xs={6} md={4}></Col>
            </Row>
        </Container>
    );
};

export default Content;
