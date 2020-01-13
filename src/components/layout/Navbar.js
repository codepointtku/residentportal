import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ icon }) => {
  return (
    <nav className="app-TopNavBar navbar navbar-default">
        <img
          src="/turku-logo.svg"
          className="Navbar"
          alt="turku-logo"
        ></img>
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
