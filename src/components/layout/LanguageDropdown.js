import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import PropTypes from "prop-types";

function LanguageDropdown(props) {
  const bgColor = props.bgcolor;
  const [lang, setLang] = useState("FI");
  if (bgColor === "dark") {
    return (
      <div>
        <DropdownButton
          id="dropdown-item-button_light"
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

LanguageDropdown.defaultProps = {
  title: "Turku Asukasportaali",
  icon: "turku-logo"
};

LanguageDropdown.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default LanguageDropdown;
