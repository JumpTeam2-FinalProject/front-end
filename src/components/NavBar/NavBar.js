import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { IoRestaurantOutline } from "react-icons/io5";
import { deleteToken } from "../../utility";
import { useHistory } from "react-router-dom";

const NavBar = ({ currentUser, setCurrentUser, ...otherProps }) => {
    
    const history = useHistory();

    const logout = () => {
        deleteToken();
        setCurrentUser(null);
        history.push("/");
    };

    return (
        <Navbar bg="light" variant="light">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            Restaurant Reviews &nbsp; <IoRestaurantOutline />
                            <small>
                                &nbsp; &nbsp; Hi,{" "}
                                {currentUser ? currentUser.firstName : "Guest"}!
                            </small>
                        </div>
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
                    {currentUser ? (
                        <>
                            <LinkContainer to="/writereview">
                                <Nav.Link>Leave Review</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/account">
                                <Nav.Link>Account</Nav.Link>
                            </LinkContainer>
                            <span className="nav-link" onClick={logout} style={{ cursor: "pointer" }}>
                                Logout
                                {/* <Nav.Item>Logout</Nav.Item> */}
                            </span>
                        </>
                    ) : (
                        <>
                            <LinkContainer to="/login">
                                <Nav.Link>Login</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/signup">
                                <Nav.Link>Sign Up</Nav.Link>
                            </LinkContainer>
                        </>
                    )}
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;
