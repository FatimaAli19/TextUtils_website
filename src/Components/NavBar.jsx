import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export default function NavBar(props) {
  return (
    <div>
      <Navbar expand="lg" className={`bg-${props.mode}`}>
        <Container>
          <Navbar.Brand>
            <a
              href="/"
              style={{ textDecoration: "none" }}
              className={`text-${props.mode === "light" ? "black" : "white"}`}
            >
              TextUtils
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <a
                  href="/home"
                  className={`text-${props.mode === "light" ? "black" : "white"}`}
                  style={{ textDecoration: "none" }}
                >
                  Home
                </a>
              </Nav.Link>
              <Nav.Link>
                <a
                  href="/about"
                  style={{ textDecoration: "none" }}
                  className={`text-${props.mode === "light" ? "black" : "white"}`}
                >
                  About
                </a>
              </Nav.Link>
              <Nav.Link>
                <a
                  href="/contact"
                  style={{ textDecoration: "none" }}
                  className={`text-${props.mode === "light" ? "black" : "white"}`}
                >
                  Contact Us
                </a>
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
