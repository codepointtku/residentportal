import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import logo from "../layout/images/turkulogo.png";
import NavbarRight from "./NavbarRight";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <div className="row">
            <Link to="/" className="col-4 navbar-brand  navbar-container">
              <img src={logo} alt="logo" />
            </Link>
            <div className="col-6">
              <NavbarRight />
            </div>
          </div>
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
