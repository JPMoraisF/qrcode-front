import './Codelist.css'
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button'

import React from "react";

export default function Codelist() {
  return (          
    <Card id="card">
      <Card.Body>
        <Card.Title>Link do Currículo</Card.Title>
        <Card.Text>9 visitantes</Card.Text>
        <Button variant="primary">Mostrar detalhes</Button>
      </Card.Body>
    </Card>
  );
}
