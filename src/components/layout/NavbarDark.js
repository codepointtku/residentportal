import React from "react";
import PropTypes from "prop-types";
import logo from "./turkulogowhite.png";

const NavbarDark = () => {
  return (
    <>
      <nav className="navbar-dark">
        <div>
          <a href="/" className="navbar-brand ml-5">
            <img src={logo} alt="logo" />
          </a>
        </div>
      </nav>
    </>
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
