import React from "react";
import logo from "../layout/images/turkulogo.png";
import { Form, Row, Col, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./login.scss";

const Login = () => {
  return (
    <div className="LoginMainform">
      <div className="Loginform">
        <Row>
          <Col className="Loginh2col">
            <h2 className="Loginh2">Tunnistamo</h2>
          </Col>
          <Col>
            <img id="Tunnistamologo" src={logo} alt="logo" />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="Loginh1">Kirjaudu sisään</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="Loginkirjaudu">
              Tähän palveluun voit tunnistautua käyttämällä jotain näistä
              <br></br>kirjautumisvaihtoehdoista.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group as={Row} controlId="formHorizontalCheck">
              <Col>
                <Form.Check
                  className="RememberMe"
                  label="Muista minut tällä laitteella"
                />
                <p className="LoginCheckbox">
                  Jos olet yhteiskäyttökoneella, älä ruksi tätä.
                </p>
              </Col>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to="/residentportal">
              <Button className="Login" variant="primary" size="lg" block>
                Mobiilivarmenne
              </Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to="/Aspa">
              <Button className="Login" variant="primary" size="lg" block>
                Varmennekortti
              </Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to="/About">
              <Button className="Login" variant="primary" size="lg" block>
                Pankkitunnukset
              </Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <Nav.Item className="Loginlink">
              <Nav.Link href="/home">&#8592; Palaa asiointipalveluun</Nav.Link>
            </Nav.Item>
          </Col>
          <Col>
            <Nav.Item className="Loginlink">
              <Nav.Link href="/home">
                Henkilötietojen käsittely Turun kaupungissa
              </Nav.Link>
            </Nav.Item>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Login;
