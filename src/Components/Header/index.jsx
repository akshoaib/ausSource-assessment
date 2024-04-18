import React from "react";
import "./header.css";
import logo from "../../assets/logo.png";
import {
  SlSocialFacebook,
  SlSocialTwitter,
  SlSocialInstagram,
  SlSocialLinkedin,
} from "react-icons/sl";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="navbar-bg mx-auto">
        <Container>
          {/* <Navbar.Brand className="nav-logo" href="#home">
            <span>
              <img src={logo} />
            </span>
          </Navbar.Brand> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ms-2">
              <Nav.Link href="#features">
                <span className="nav-logo">
                  <img width={100} height={"auto"} src={logo} />
                </span>
              </Nav.Link>
              {/* <Navbar.Brand className="nav-logo" href="#home">
                <span>
                  <img src={logo} />
                </span>
              </Navbar.Brand> */}

              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">About Us</Nav.Link>
              <Nav.Link href="#pricing">Services</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Projects</Nav.Link>
              <Nav.Link href="#pricing">Clients</Nav.Link>
              <Nav.Link href="#pricing">Contact Us</Nav.Link>
              <Nav.Link href="#pricing">
                {" "}
                <SlSocialFacebook size={20} />
              </Nav.Link>
              <Nav.Link href="#pricing">
                {" "}
                <SlSocialTwitter size={20} />
              </Nav.Link>
              <Nav.Link href="#pricing">
                {" "}
                <SlSocialInstagram size={20} />
              </Nav.Link>
              <Nav.Link href="#pricing">
                {" "}
                <SlSocialLinkedin size={20} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
