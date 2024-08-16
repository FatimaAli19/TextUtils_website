import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <div>
      <Navbar expand="lg" className={`bg-${props.mode} `}>
        <Container>
          <Navbar.Brand>
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              className={`text-${props.mode === "light" ? "black" : "white"}`}
            >
              TextUtils
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as="span">
                <Link
                  to="/home"
                  className={`text-${
                    props.mode === "light" ? "black" : "white"
                  }`}
                  style={{ textDecoration: "none" }}
                >
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link as="span">
                <Link
                  to="/about"
                  style={{ textDecoration: "none" }}
                  className={`text-${
                    props.mode === "light" ? "black" : "white"
                  }`}
                >
                  About
                </Link>
              </Nav.Link>
              <Nav.Link as="span">
                <Link
                  to="/contact"
                  style={{ textDecoration: "none" }}
                  className={`text-${
                    props.mode === "light" ? "black" : "white"
                  }`}
                >
                  Contact Us
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Form
            className={`text-${props.mode === "light" ? "black" : "white"}`}
          >
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Enable dark mode"
              onClick={props.toggleMode}
              style={{
                "--bs-checked-bg": "green",
                "--bs-checked-color": "white",
              }}
            />
          </Form>
        </Container>
      </Navbar>
    </div>
  );
}
