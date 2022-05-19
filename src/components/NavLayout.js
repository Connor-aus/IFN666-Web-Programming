import { Component } from "react";

import { Navbar, Nav, NavbarBrand, Container } from "react-bootstrap";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Link,
} from "react-router-dom";

import "../customcss.css";
import tag from "../img/stockImage.png";
import LinkContainer from "react-router-bootstrap/LinkContainer";

export default function NavLayout() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img src={tag} width="150" height="50" alt="tag" />
        </Navbar.Brand>
        <Navbar.Brand href="#home">Stockings</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/stocks">
              <Nav.Link>Stocks</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/industry">
              <Nav.Link>Industry</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/pricehistory">
              <Nav.Link disabled></Nav.Link>
            </LinkContainer>
            <LinkContainer to="*">
              <Nav.Link disabled></Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // <nav>
    //   <Navbar variant={"dark"} expand="xl" fixed="top">
    //     <Container>
    //       <Navbar.Brand as={NavLink} to="/">
    //         <img src={tag} width="150" height="50" alt="tag" />
    //       </Navbar.Brand>
    //       <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //       <Navbar.Collapse id="basic-navbar-nav">
    //         <Nav className="me-auto">
    //           <LinkContainer to="/">
    //             <Nav.Link>Home</Nav.Link>
    //           </LinkContainer>
    //           <LinkContainer to="/stocks">
    //             <Nav.Link>Stocks</Nav.Link>
    //           </LinkContainer>
    //           <LinkContainer to="/industry">
    //             <Nav.Link>Industry</Nav.Link>
    //           </LinkContainer>
    //           <LinkContainer to="/pricehistory">
    //             <Nav.Link disabled></Nav.Link>
    //           </LinkContainer>
    //           <LinkContainer to="*">
    //             <Nav.Link disabled></Nav.Link>
    //           </LinkContainer>
    //         </Nav>
    //       </Navbar.Collapse>
    //     </Container>
    //   </Navbar>
    // </nav>
  );
}
