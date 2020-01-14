import React from "react";
import { Container, Row, Col } from "react-bootstrap/";
import Navbar from "./components/layout/Navbar";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div>
        <Row className="row">
          <Col className="col1" xs={5}>
            <h3>1 of 1</h3>
            <p>
              nd typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen
              book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged. It
              was popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Col>
          <Col className="col1" xs={5}>
            <h3>2 of 1</h3>
            <p>
              nd typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen
              book. It has survived not only five centuries, but also the leap
              into electro
            </p>
          </Col>
        </Row>
        <Row className="row">
          <Col className="col1" xs={5}>
            <h3>1 of 2</h3>
            <p>
              nd typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen
              book.
            </p>
          </Col>
          <Col className="col1" xs={5}>
            <h3>2 of 2</h3>
            <p>
              nd typesetting industry. Lorem Ipsum has been the industry's sts
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Col>
        </Row>
        <Row className="row">
          <Col className="col1" xs={5}>
            <h3>1 of 3</h3>
            <p>
              nd typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen
              book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged. It
              was popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
