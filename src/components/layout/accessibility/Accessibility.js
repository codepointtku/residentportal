import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import LanguageDropdown from "./LanguageDropdown";
import ContrastButton from "./ContrastButton";
import TextSizeButtons from "./TextSizeButtons";

const Accessibility = props => {
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

          <a href="/" className="navmenuright" aria-label="Fonttikoko">
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

Accessibility.defaultProps = {
  title: "Turku Asukasportaali",
  icon: "turku-logo"
};

Accessibility.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Accessibility;
