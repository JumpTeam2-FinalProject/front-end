import React from "react";
import { Form, Button } from "react-bootstrap";

const ReviewForm = () => {
    return (
        <div>
            <Form className="mt-2">
                <Form.Group>
                    <Form.Label>Restaurant</Form.Label>
                    <Form.Select aria-label="Select restaurant">
                        <option>Select Restaurant</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group
                    className="mb-3 mt-3"
                    controlId="exampleForm.ControlInput1"
                >
                    <Form.Label>Rating</Form.Label>
                    <Form.Control type="text" placeholder="Rating" />
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                >
                    <Form.Label>Your Review</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="Write your review here..."
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default ReviewForm;
