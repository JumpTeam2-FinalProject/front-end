// import { Container } from "react-bootstrap";
import React from "react";
import NavBar from "../NavBar/NavBar";
// import classes from "./Layout.module.css";

const Layout = (props) => {
    return (
        <div>
            <NavBar {...props} />
            {/* <Container className={classes.Content} fluid>
                {props.children}
            </Container> */}
            {props.children}
        </div>
    );
};

export default Layout;
