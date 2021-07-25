import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { IoRestaurantOutline } from "react-icons/io5";

const NavBar = () => {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>
                        Restaurant Reviews <IoRestaurantOutline />
                    </Navbar.Brand>
                </LinkContainer>
                <Nav className="ml-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/restaurants">
                        <Nav.Link>Restaurants</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/reviews">
                        <Nav.Link>Reviews</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/writereview">
                        <Nav.Link>Leave Review</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/account">
                        <Nav.Link>Account</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/login">
                        <Nav.Link>Login</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/signup">
                        <Nav.Link>Sign Up</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;
