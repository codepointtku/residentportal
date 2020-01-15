import React from "react";
import PropTypes from "prop-types";
import logo from "./turkulogo.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div>
          <a href="/" className="navbar-brand ml-5">
            <img src={logo} alt="logo" />
          </a>
        </div>
      </nav>
      <nav className="navmenu">
        <div className="navlinks">
          <a className="navmenu font-weight-bold ml-5" href="/asp/">
            Asukasportaali{" "}
          </a>
          <a className="navmenu" href="/lisaa/">
            Lisää tietoa{" "}
          </a>
        </div>
      </nav>
    </>
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
