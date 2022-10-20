import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import '../Styles/nysl.css';


export const Navbarr = () => {
    return (

        <header className="header">
        <Navbar bg="light" expand="lg">
            <LinkContainer to="/">
  <Navbar.Brand>Home</Navbar.Brand>
  </LinkContainer>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
        <LinkContainer to="/about">
      <Nav.Link>About</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/contact">
      <Nav.Link>Contact</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/rules-and-policies">
      <Nav.Link>Rules and Policies</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/game-information">
      <Nav.Link>Game Information</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/registracion-form">
      <Nav.Link>Registration Form</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/sign-in">
      <Nav.Link>Sign In</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/chat">
      <Nav.Link>Chat</Nav.Link>
      </LinkContainer>

    </Nav>
  </Navbar.Collapse>
</Navbar>
</header>
    )
}
 