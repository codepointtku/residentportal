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
    <div fluid="True" className="container1 ">
      <CardGroup>
        <Card>
          <h3 className="cardtitle font-weight-bold">HENKILÖTIEDOT</h3>
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
            <h3 className="cardtitle font-weight-bold">PERHE JA MUUT ROOLIT</h3>
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
                {" "}
                <p className="font-weight-bold">Rahastonhoitaja</p>
              </Card.Title>
              <Card.Text>Turun pystykorvat RY </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Title className="cardtitle1">
              <h3 className="font-weight-bold">OMAT PAIKAT</h3>
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
            <h3 className="cardtitle font-weight-bold">ASIOINNIT </h3>
          </Card.Body>
        </Card>
          {/* kortit vaihtuu */}
        <CardGroup>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
      
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
       
      </Card.Text>
    </Card.Body>
  </Card>
    {/* kortit vaihtuu */}
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
       
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>
  {/* kortit vaihtuu */}
<CardGroup>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
       
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
      
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>
<CardGroup>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
       
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
       
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>
      </div>
    </div>
  );
};

export default Residentportal;
