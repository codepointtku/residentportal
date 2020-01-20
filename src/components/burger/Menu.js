import React from "react";
import { Link } from "react-router-dom";

const Menu = ({ close }) => (
  <div className="menu card card-background">
    <ul onClick={close}>
      <li onClick={close}><Link to="/">Home</Link></li>
      <li onClick={close}><Link to="/about">About</Link></li>
    </ul>
  </div>
);
export default Menu;