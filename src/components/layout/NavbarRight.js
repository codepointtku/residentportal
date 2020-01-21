import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Dropdown, DropdownButton } from "react-bootstrap";
import contrastButtonBlack from "./images/contrast_button.png";
import contrastButtonWhite from "./images/contrast_button_white.png";

const NavbarRight = props => {
  function ContrastButton(props) {
    const bgColor = props.bgcolor;
    if (bgColor === "dark") {
      return <img src={contrastButtonWhite} alt="contrast button" />;
    }
    return <img src={contrastButtonBlack} alt="contrast button" />;
    }
  function LanguageDropdown(props) {
    const bgColor = props.bgcolor;
    if (bgColor === "dark") {
      return (
        <div>
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
        </div>
      );
  }
    return (
        <div>
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
        </div>
    );
}
  function TextSizeButtons(props) {
    const bgColor = props.bgcolor;
    if (bgColor === "dark") {
      return (
        <div>
          <button id="smalltext" className="textsize_button_light ">
            A
          </button>
          <button id="mediumtext" className="textsize_button_light">
            A
          </button>
          <button id="largetext" className="textsize_button_light">
            A
          </button>
        </div>
      );
    }

    return (
      <div>
        <button id="smalltext" className="textsize_button ">
          A
        </button>
        <button id="mediumtext" className="textsize_button">
          A
        </button>
        <button id="largetext" className="textsize_button">
          A
        </button>
      </div>
    );
  }
  
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
            <ContrastButton bgcolor={props.bgcolor} />
          </button>

          <a href="/" className="navmenuright" aria-label="Asukasportaali">
            Tekstikoko
          </a>
          <TextSizeButtons bgcolor={props.bgcolor}></TextSizeButtons>
          <LanguageDropdown bgcolor={props.bgcolor}></LanguageDropdown>
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
