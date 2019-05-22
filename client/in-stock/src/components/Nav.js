import React, { Component } from "react";
import logo from "../assets/Logo/Logo-instock.svg";

export default class nav extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav__logo">
          <a href="../html/bandsite.html">
            <img src={logo} />
          </a>
        </div>
        <div className="nav__menu">
          <a className="nav__menu--inventory" href="">
            Inventory
          </a>
          <a className="nav__menu--location" href="">
            Location
          </a>
        </div>
      </nav>
    );
  }
}
