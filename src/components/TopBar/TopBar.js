import "./TopBar.css";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

import React from "react";

export default function TopBar() {
  return (
    <Navbar bg="light" expand="sm">
      <Navbar.Brand href="#home">QRCode-I-Nator</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Perfil</Nav.Link>
          <Nav.Link href="#link">Códigos QR</Nav.Link>
          <Button variant="primary">Novo Código</Button>{' '}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    
  );
}
