import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import logo from "../layout/images/profile_photo.png";
import Image from "react-bootstrap/Image";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import Chat from "../layout/images/chat.png";
import GoogleMap from "./GoogleMap";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const Residentportal = () => {
  return (
    <div fluid="True" className="container1 ">
      <CardGroup>
        <Card>
          <h6 className="cardtitle">HENKILÖTIEDOT</h6>
          <table className="ml-3">
            <thead>
              <tr className="text-left">
                <th>Nimi</th>
                <th className="font-weight-normal">Minna Aliisa Föri</th>
              </tr>
              <tr className="text-left">
                <th>Henkilötunnus</th>
                <th className="font-weight-normal">010180-XXX</th>
              </tr>
              <tr className="text-left">
                <th>Sukupuoli</th>
                <th className="font-weight-normal">Nainen</th>
              </tr>
              <tr className="text-left">
                <th>Siviilisääty</th>
                <th className="font-weight-normal">Naimisissa</th>
              </tr>
              <tr className="text-left">
                <th>Kotiosoite</th>
                <th className="font-weight-normal">Förikatu 1, 20810 Turku</th>
              </tr>
              <tr className="text-left">
                <th>Sähköposti</th>
                <th className="font-weight-normal">Minna Aliisa Föri</th>
              </tr>
              <tr className="text-left">
                <th>Puhelin</th>
                <th className="font-weight-normal">+358 50 123 4567</th>
              </tr>
              <tr className="text-left">
                <th>Äidinkieli</th>
                <th className="font-weight-normal">Suomi</th>
              </tr>
              <tr className="text-left">
                <th>Kansalaisuus</th>
                <th className="font-weight-normal">Suomen</th>
              </tr>
            </thead>
          </table>
        </Card>
        <Card>
          <div className="card-img-top-right">
            <Image src={logo} fluid alt="Responsive image" />
          </div>
          <p className="font-weight-bold">Hallinnoi</p>
          <ButtonGroup vertical className="btn-vertical">
            <Button className="card-btn1  ">
              <a className="text-dark" href="/">
                Tietoluvat{" "}
              </a>
            </Button>
            <Button className="card-btn">
              <a className="text-dark" href="/">
                Valtuutukset
              </a>
            </Button>
            <Button className="card-btn">
              <a className="text-dark" href="/">
                Henkilötiedot
              </a>
            </Button>
          </ButtonGroup>
        </Card>
        <Card>
          <Image src={Chat} fluid className="img-chat" alt="Responsive image" />
        </Card>
      </CardGroup>
      {/* kortit vaihtuu */}
      <div fluid="True">
        <CardGroup>
          <Card>
            <h3 className="cardtitle">PERHE JA MUUT ROOLIT</h3>
            <Container>
              <Row>
                <p className="font-weight-bold">Aviomies</p>
                <Image
                  className="card-img-top-right"
                  src={logo}
                  fluid
                  alt="Responsive image"
                />
                <p className="font-weight-bold">
                  Kari Föri <br />
                  010187-XXXX
                </p>
                <p className="font-weight-bold">lapsi</p>
                <Image
                  className="card-img-top-right"
                  src={logo}
                  fluid
                  alt="Responsive image"
                />
                <p className="font-weight-bold">
                  Lotta Föri <br />
                  010110-XXXX
                </p>
                <p className="font-weight-bold">Lapsi</p>

                <Image
                  className="card-img-top-right"
                  src={logo}
                  fluid
                  alt="Responsive image"
                />
                <p className="font-weight-bold">
                  Paavo Föri <br />
                  010110-XXXX
                </p>
              </Row>
            </Container>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>
                {" "}
                <p className="font-weight-bold">Rahastonhoitaja</p>
              </Card.Title>
              <Card.Text>Turun pystykorvat RY </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Title className="cardtitle">
              <h3>OMAT PAIKAT</h3>
            </Card.Title>
            <Card.Text>
              <div className="">
                <p>Koti</p>
              </div>
            </Card.Text>

            <GoogleMap />
          </Card>
        </CardGroup>
      </div>
    </div>
  );
};

export default Residentportal;
