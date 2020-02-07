import React, { Component } from "react";
import closeIcon from "./../layout/images/chat.png";
import "./styles/header.scss";

class Header extends Component {
  render() {
    return (
      <div className="sc-header">
        <img className="sc-header--img" src={this.props.imageUrl} alt="" />
        <div className="sc-header--team-name"> {this.props.teamName} </div>
        <div class="barcontainer" onclick="myFunction(this)">
          <div class="bar1" onClick={this.props.onClose}></div>
          <div class="bar2" onClick={this.props.onClose}></div>

        </div>
      </div>
    );
  }
}

export default Header;
