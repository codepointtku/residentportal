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
import Col from "react-bootstrap/Col";

const Residentportal = () => {
  return (
    <div fluid="True" className="container1">
      <CardGroup>
        <Card>
          <div className="m-1">
            <h5 className="mt-4 p-3 ml-5 text-left font-weight-bold">
              HENKILÖTIEDOT
            </h5>
            <table className="ml-3">
              <thead>
                <tr className="text-left">
                  <th className="pb-3">Nimi</th>
                  <th className="pb-3 font-weight-normal">Minna Aliisa Föri</th>
                </tr>
                <tr className="text-left">
                  <th className="pb-3">Henkilötunnus</th>
                  <th className="pb-3 font-weight-normal">010180-XXX</th>
                </tr>
                <tr className="text-left">
                  <th className="pb-3">Sukupuoli</th>
                  <th className="pb-3 font-weight-normal">Nainen</th>
                </tr>
                <tr className="text-left">
                  <th className="pb-3">Siviilisääty</th>
                  <th className="pb-3 font-weight-normal">Naimisissa</th>
                </tr>
                <tr className="text-left">
                  <th className="pb-3">Kotiosoite</th>
                  <th className="pb-3 font-weight-normal">
                    Förikatu 1, 20810 Turku
                  </th>
                </tr>
                <tr className="text-left">
                  <th className="pb-3">Sähköposti</th>
                  <th className="pb-3 font-weight-normal">Minna Aliisa Föri</th>
                </tr>
                <tr className="text-left">
                  <th className="pb-3">Puhelin</th>
                  <th className="pb-3 font-weight-normal">+358 50 123 4567</th>
                </tr>
                <tr className="text-left">
                  <th className="pb-3">Äidinkieli</th>
                  <th className="pb-3 font-weight-normal">Suomi</th>
                </tr>
                <tr className="text-left">
                  <th>Kansalaisuus</th>
                  <th className="font-weight-normal">Suomen</th>
                </tr>
              </thead>
            </table>
          </div>
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
          <Image
            src={Chat}
            fluid
            className="img-chat"
            alt="Responsive image"
            useMap="#mapname"
          ></Image>

          <map name="mapname">
            <area
              shape="rect"
              coords="90,240,215,290"
              href="./about"
              alt="picture area"
            ></area>
          </map>
        </Card>
      </CardGroup>
      {/* kortit vaihtuu */}
      <div fluid="True">
        <CardGroup>
          <Card>
            <h5 className="cardtitle font-weight-bold">PERHE JA MUUT ROOLIT</h5>
            <Container>
              <Row className="cardRow">
                <Col>
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
                </Col>
                <Col>
                  <p className="font-weight-bold">Lapsi</p>
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
                </Col>
                <Col>
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
                </Col>
              </Row>
            </Container>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>
                <p className="font-weight-bold">Rahastonhoitaja</p>
              </Card.Title>
              <Card.Text>Turun pystykorvat RY </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Title className="cardtitle1">
              <h5 className="font-weight-bold">OMAT PAIKAT</h5>
            </Card.Title>
            <Card.Text>
              <div className="cardtext">
                <p>Koti</p>
              </div>
            </Card.Text>
            <GoogleMap />
          </Card>
        </CardGroup>
      </div>
      {/* kortit vaihtuu */}
      <div fluid="True" className="container1 ">
        <Card>
          <Card.Body>
            <h5 className="cardtitle font-weight-bold ">ASIOINNIT </h5>
          </Card.Body>
        </Card>
        {/* kortit vaihtuu */}
        <CardGroup>
          <Card>
            <h5 className="font-weight-bold">AKTIVITEETTI</h5>

            <Card.Body>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
          {/* kortit vaihtuu */}
          <Card>
            <Card.Body>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        {/* kortit vaihtuu */}
        <CardGroup>
          <Card>
            <Card.Body>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card>
            <h5 className="font-weight-bold">SINUA VOISI KIINNOSTAA</h5>

            <Card.Body>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
};

export default Residentportal;
