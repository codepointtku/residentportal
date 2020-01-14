import React from "react";
import {} from "react-bootstrap";
import turkulogo from './turkulogo.png';


const Foot = () => {
  return (
    
    <div className="container footer">
      <div className="row">
        <div className="col-lg-3 col-md-3">
          <div className="navbar-brand">
            <img alt="Turun kaupunki" src={turkulogo} title="Turun kaupunki" />
          </div>
        </div>
      </div>
    </div>
   
  );
};
export default Foot;
