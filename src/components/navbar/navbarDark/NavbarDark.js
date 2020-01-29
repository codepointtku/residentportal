import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import logo from "../../layout/images/turkulogowhite.png";
import Accessibility from "../../accessibility/Accessibility";
import "./navbardark.scss"

const NavbarDark = () => {
  return (
    <div>
      <nav className="navbar navbar-dark">
        <div className="container">
          <Link
            to="/"
            className="navbar-brand navbar-container"
          >
            <img src={logo} alt="logo" id="tkulogo" />
          </Link>
          <Accessibility className="col-md-6 col-xs-12" bgcolor="dark" />
        </div>
      </nav>
      <nav className="navmenu">
        <ul className="row">
          <Link
            id="asukas-link"
            to="/login"
            className="col-sm-4 profilemenu"
            aria-label="Asukas"
          >
            Asukas{" "}
          </Link>
          <Link
            id="aspa-link"
            to="/about"
            className="col-sm-4 profilemenu"
            aria-label="Asiakaspalvelija"
          >
            Lääkäri{" "}
          </Link>
          <Link
            id="information-link"
            to="/about"
            className="col-sm-4 profilemenu"
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
