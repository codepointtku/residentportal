import React from "react";
import { Container, Row, Col } from "react-bootstrap/";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Container>
        <header className="App-header"></header>
        <h1>Turku Asukasportaali</h1>
        <Row>
          <Col class="col1">
            <h3>1 of 2</h3>
          </Col>
          <Col>
            <h3>2 of 2</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>1 of 3</h3>
          </Col>
          <Col>
            <h3>2 of 3</h3>
          </Col>
          <Col>
            <h3>3 of 3</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
