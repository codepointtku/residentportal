import React from "react";
import {} from "react-bootstrap";
import turkulogo from "../layout/images/turkufooterlogo2.png";

const Foot = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="container">
          <h2 id="footh2">Turku Asukasportaali</h2>
          <p>
            <span id="footspan">
              © Turun Kaupunki
              <br />
              PL 355 20101 Turku
              <br />
              vaihde (02) 330 000
              <br />
              <a
                href="http://www.turku.fi"
                rel="noopener noreferrer"
                target="_blank"
              >
                www.turku.fi
              </a>
            </span>
            <br />
            <br />
            <a href="/">Saavutettavuusseloste</a>
            <br />
            <a href="https://opaskartta.turku.fi/eFeedback/fi/Feedback/30-S%C3%A4hk%C3%B6iset%20asiointipalvelut">
              Palautteesi voit lähettää täältä.
            </a>
          </p>
          <img
            alt="Turun kaupunki"
            id="footerlogo"
            src={turkulogo}
            title="Turun kaupunki"
          />
        </div>
      </div>
    </div>
  );
};
export default Foot;
