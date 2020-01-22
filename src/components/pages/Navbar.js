import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import logo from "../layout/images/turkulogo.png";
import Accessibility from "../layout/accessibility/Accessibility";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <Link
            to="/"
            className="col-md-4 col-xs-12 navbar-brand navbar-container"
          >
            <img src={logo} alt="logo" />
          </Link>
          <Accessibility className="col-md-6 col-xs-12" />
        </div>
      </nav>
      <nav className="navmenu">
        <ul className="navlinks">
          <Link
            to="/"
            className="navmenu font-weight-bold ml-5"
            aria-label="Asukasportaali"
          >
            Asukasportaali
          </Link>
          <Link to="/about" className="navmenu" aria-label="Lisää tietoa">
            Lisää tietoa
          </Link>
        </ul>
      </nav>
    </div>
  );
};

Navbar.defaultProps = {
  title: "Turku Asukasportaali",
  icon: "turku-logo"
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
