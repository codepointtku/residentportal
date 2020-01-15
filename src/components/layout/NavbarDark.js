import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import logo from "./turkulogowhite.png";

const NavbarDark = () => {
  return (
    <Fragment>
      <nav className="navbar-dark">
        <div>
          <Link href="/" className="navbar-brand ml-5">
            <img src={logo} alt="logo" />
          </Link>
        </div>
      </nav>
    </Fragment>
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
