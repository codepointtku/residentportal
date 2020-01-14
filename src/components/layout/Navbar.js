import React from "react";
import PropTypes from "prop-types";
import logo from "./turkulogo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <a href="/" className="navbar-brand">
          <img src={logo} alt="logo" />
        </a>
      </div>
    </nav>
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
