import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import logo from "../layout/images/turkulogowhite.png";
import Accessibility from "./Accessibility";

const NavbarDark = () => {
  return (
    <div>
      <nav className="navbar navbar-dark">
        <div className="container">
          <Link to="/" className="col-4 navbar-brand navbar-container">
            <img src={logo} alt="logo" />
          </Link>
          <Accessibility className="col-6" bgcolor="dark" />
        </div>
      </nav>
      <nav className="container">
        <ul className="row">
          <Link
            id="asukas-link"
            to="/asp"
            className="col-sm-3 profilemenu"
            aria-label="Asukas"
          >
            Asukas{" "}
          </Link>
          <Link
            id="aspa-link"
            to="/about"
            className="col-sm-3 profilemenu"
            aria-label="Asiakaspalvelija"
          >
            Asiakaspalvelija{" "}
          </Link>
          <Link
            id="doctor-link"
            to="/about"
            className="col-sm-3 profilemenu"
            aria-label="Lääkäri"
          >
            Lääkäri{" "}
          </Link>
          <Link
            id="information-link"
            to="/about"
            className="col-sm-3 profilemenu"
            aria-label="Lisää tietoa"
          >
            Lisää tietoa{" "}
          </Link>
        </ul>
      </nav>
    </div>
  );
};

NavbarDark.defaultProps = {
  title: "Turku Asukasportaali",
  icon: "turku-logo"
};

NavbarDark.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default NavbarDark;
