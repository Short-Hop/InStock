import React, { Component } from "react";
import logo from "../assets/Logo/Logo-instock.svg";
import { Link } from "react-router-dom";

export default class nav extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav__logo">
          <Link to="/warehouses">
            <img src={logo} />
          </Link>
        </div>
        <div className="nav__menu">
          <Link className="nav__menu--inventory" to="/inventory">
            Inventory
          </Link>
          <Link className="nav__menu--location" to="/warehouses">
            Location
          </Link>
        </div>
      </nav>
    );
  }
}
