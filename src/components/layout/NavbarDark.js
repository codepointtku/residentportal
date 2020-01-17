import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import logo from "./turkulogowhite.png";

const NavbarDark = () => {
  return (
    <Fragment>
      <nav className="row navbar-dark">
        <div>
          <Link href="/" className="navbar-brand ml-5">
            <img src={logo} alt="logo" />
          </Link>
        </div>
      </nav>
      <nav className="container">
        <ul className="row">
          <Link
            id="asukas-link"
            to="/asp"
            className="col-sm profilemenu"
            aria-label="Asukas"
          >
            Asukas{" "}
          </Link>
          <Link
            id="aspa-link"
            to="/about"
            className="col-sm profilemenu"
            aria-label="Asiakaspalvelija"
          >
            Asiakaspalvelija{" "}
          </Link>
          <Link
            id="doctor-link"
            to="/about"
            className="col-sm profilemenu"
            aria-label="Lääkäri"
          >
            Lääkäri{" "}
          </Link>
          <Link
            id="information-link"
            to="/about"
            className="col-sm profilemenu"
            aria-label="Lisää tietoa"
          >
            Lisää tietoa{" "}
          </Link>
        </ul>
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
