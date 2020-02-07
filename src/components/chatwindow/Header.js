import React, { Component } from "react";
import "./styles/header.scss";

class Header extends Component {
  render() {
    return (
      <div className="sc-header">
        <img className="sc-header--img" src={this.props.imageUrl} alt="" />
        <div className="sc-header--team-name"> {this.props.teamName} </div>
        <div className="barcontainer">
          <div className="bar1" onClick={this.props.onClose}></div>
          <div className="bar2" onClick={this.props.onClose}></div>
        </div>
      </div>
    );
  }
}

export default Header;
