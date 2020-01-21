import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Residentportal = () => {
  return (
    <Container className="container1">
      <Row>
        <Col sm={5}>
          <Table striped bordered hover className="table1">
            <tbody>
              <thead>
                <tr>
                  <th> Nimi</th>
                  <th className="font-weight-normal">Minna Aliisa Föri</th>
                </tr>
              </thead>

              <thead>
                <tr>
                  <td className="font-weight-bold">Henkilötunnus</td>
                  <td className="font-weight-normal">010180-xxxx</td>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th>Sukupuoli</th>
                  <th className="font-weight-normal">Nainen</th>
                </tr>
              </thead>
              <thead>
                <tr>
                  <td className="font-weight-bold">Sivilisääty</td>
                  <td className="font-weight-normal">Naimisissa</td>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th> Kotiosoite</th>
                  <th className="font-weight-normal">
                    Förikatu 1, 20810 Turku
                  </th>
                </tr>
              </thead>
              <thead>
                <tr>
                  <td className="font-weight-bold">Sähköposti</td>
                  <td className="font-weight-normal">minna@gmail.com</td>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th> Puhelin</th>
                  <th className="font-weight-normal">+358 50 123 4567</th>
                </tr>
              </thead>
              <thead>
                <tr>
                  <td className="font-weight-bold">Kansalaisuus</td>
                  <td className="font-weight-normal">Suomen</td>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th>Äidinkieli</th>
                  <th className="font-weight-normal">Suomi</th>
                </tr>
              </thead>
            </tbody>
          </Table>
          <div className="card-img-top-right "></div>
          <ButtonGroup vertical>
            <Button className="card-btn1 ">
              <a href="/">Tietoluvat </a>
            </Button>
            <Button className="card-btn ">
              <a href="/">valtuutukset</a>
            </Button>
            <Button className="card-btn">
              <a href="/">Henkilötiedot</a>
            </Button>
          </ButtonGroup>
        </Col>
        <Col sm={5}>
          <Card border="dark" style={{ width: "35rem" }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Dark Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <br />

          <Card border="light" style={{ width: "35rem" }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Light Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
        </Col>
      </Row>
      <Row>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
      </Row>
    </Container>
  );
};

export default Residentportal;
