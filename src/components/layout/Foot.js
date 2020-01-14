import React from "react";
import {} from "react-bootstrap";
import turkulogo from './turkufooterlogo.png';


const Foot = () => {
  return (
    
    <div className="container footer">
      <div className="row">
        <div className="col-lg-3 col-md-3">
          <div className="navbar-brand">
            <img alt="Turun kaupunki" src={turkulogo} title="Turun kaupunki" />
          </div>
        </div>
        <div class="col-lg-6 col-md-6" id="footID">
    <h2 id="footh2">Turku Asukasportaali</h2>
    <p><span id="footspan">© Turun Kaupunki 
        <br />PL 355 20101 Turku 
        <br />vaihde (02) 330 000 
        <br />
        <a href="http://www.turku.fi" rel="noopener noreferrer" target="_blank">www.turku.fi</a>
    </span>
    <br />
    <br />
    <a class="accessibility-info-link" href="/accessibility-info">Saavutettavuusseloste</a>
    <br />
    <a class="feedback-link" href="https://opaskartta.turku.fi/eFeedback/fi/Feedback/30-S%C3%A4hk%C3%B6iset%20asiointipalvelut" rel="noopener noreferrer" target="_blank">Palautteesi voit lähettää täältä.
                </a>
              </p>
            </div>
      </div>
    </div>
   
  );
};
export default Foot;
