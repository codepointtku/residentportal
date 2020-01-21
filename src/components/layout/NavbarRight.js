import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Dropdown, DropdownButton } from "react-bootstrap";
import contrastButtonIcon from "./images/contrast_button.png";

const NavbarRight = () => {
  const [lang, setLang] = useState("FI");

  return (
    <div>
      <nav className="navmenuright">
        <ul className="navlinksright">
          <a href="/" className="navmenuright" aria-label="Kontrasti ">
            Kontrasti
          </a>
          <button
            aria-label="vaihda kontrastia"
            aria-pressed="false"
            className="contrast_button"
            id="contrastButton"
            tabIndex="0"
            type="button"
          >
            <img src={contrastButtonIcon} alt="contrast button" />
          </button>

          <a href="/" className="navmenuright" aria-label="Asukasportaali">
            Tekstikoko
          </a>
          <button id="smalltext" className="textsize_button">
            A
          </button>
          <button id="mediumtext" className="textsize_button">
            A
          </button>
          <button id="largetext" className="textsize_button">
            A
          </button>
          <DropdownButton
            id="dropdown-item-button"
            title={lang}
            className="navmenuright"
          >
            <Dropdown.Item
              className="dropdownbutton"
              as="button"
              onClick={() => setLang("FI")}
            >
              FI
            </Dropdown.Item>
            <Dropdown.Item
              className="dropdownbutton"
              as="button"
              onClick={() => setLang("SV")}
            >
              SV
            </Dropdown.Item>
            <Dropdown.Item
              className="dropdownbutton"
              as="button"
              onClick={() => setLang("EN")}
            >
              EN
            </Dropdown.Item>
          </DropdownButton>

          <Link
            to="/logout"
            className="navmenuright ml-1"
            aria-label="Kirjaudu ulos"
          >
            Kirjaudu ulos
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
