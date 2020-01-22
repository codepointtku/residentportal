import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import logo from "./kuva.jpg";
import Image from "react-bootstrap/Image";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";

const Residentportal = () => {
  return (
    <div fluid="True" className="container1">
      <CardDeck>
        <Card>
        <div className="card-img-top-right">
          <Image src={logo} fluid alt="Responsive image" />
        </div>
        <ButtonGroup vertical>
          <Button className="card-btn1">
            <a href="/">Tietoluvat </a>
          </Button>
          <Button className="card-btn">
            <a href="/">valtuutukset</a>
          </Button>
          <Button className="card-btn">
            <a href="/">Henkilötiedot</a>
          </Button>
        </ButtonGroup>
        </Card>
      </CardDeck>
    </div>
  );
};

export default Residentportal;
