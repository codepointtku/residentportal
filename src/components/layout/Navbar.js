import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import PropTypes from "prop-types";
import logo from "./turkulogo.png";

const Navbar = () => {
  return (
    <Router>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-container">
            <Link to="/" className="navbar-brand ml-5 navbar-container">
              <img src={logo} alt="logo" />
            </Link>
          </div>
        </div>
      </nav>
      <nav className="navmenu">
        <ul className="navlinks">
          <Link
            to="/Residentportal"
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
    </Router>
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
