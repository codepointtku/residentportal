import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Dropdown, DropdownButton } from "react-bootstrap";

const NavbarRight = () => {
  return (
    <div>
      <nav className="navmenu">
        <ul className="navlinks">
          <Link
            to="/"
            className="navmenu font-weight-bold ml-5"
            aria-label="Asukasportaali"
          >
            Kontrasti
          </Link>

          <Link
            to="/"
            className="navmenu font-weight-bold ml-5"
            aria-label="Asukasportaali"
          >
            Tekstikoko
          </Link>
          <DropdownButton id="dropdown-item-button" title="FI">
            <Dropdown.Item as="button">FI</Dropdown.Item>
            <Dropdown.Item as="button">SV</Dropdown.Item>
            <Dropdown.Item as="button">EN</Dropdown.Item>
          </DropdownButton>

          <Link to="/about" className="navmenu" aria-label="Lisää tietoa">
            Lisää tietoa
          </Link>
        </ul>
      </nav>
    </div>
  );
};

NavbarRight.defaultProps = {
  title: "Turku Asukasportaali",
  icon: "turku-logo"
};

NavbarRight.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default NavbarRight;
