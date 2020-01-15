import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";
import logo from "./turkulogo.png";

const Navbar = () => {
  return (
    <Router>
      <nav className="navbar">
        <div>
          <Link to="/" className="navbar-brand ml-5">
            <img src={logo} alt="logo" />
          </Link>
        </div>
      </nav>
      <nav className="navmenu">
        <ul className="navlinks">
          <Link to="/asp" className="navmenu font-weight-bold ml-5">
            Asukasportaali{" "}
          </Link>
          <Link to="/about" className="navmenu">
            Lisää tietoa{" "}
          </Link>
        </ul>
      </nav>
      <Switch>
        <Route path="/"></Route>
      </Switch>
    </Router>
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
