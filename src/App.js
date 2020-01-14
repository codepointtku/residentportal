import React from "react";
import { Container, Row, Col } from "react-bootstrap/";
import Navbar from "./components/layout/Navbar";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div>
        <Container>
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
    </div>
  );
}

export default App;
