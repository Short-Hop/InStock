import React, { Component } from "react";
import logo from "../assets/Logo/Logo-instock.svg";
import { Link } from "react-router-dom";

export default class nav extends Component {
  render() {
    console.log(this.props.page)

    let inventoryLink;
    let locationLink
    if (this.props.page.includes("/warehouses")) {
      inventoryLink = <Link className="nav__menu--inventory"  to="/inventory">Inventory</Link>
      locationLink = <Link className="location__selected" to="/warehouses">Location</Link>
    } else if (this.props.page.includes("/inventory")) {
      inventoryLink = <Link className="inventory__selected" to="/inventory">Inventory</Link>
      locationLink = <Link className="nav__menu--location"  to="/warehouses">Location</Link>
    }


    return (
      <nav className="nav">
        <div className="nav__logo">
          <Link to="/warehouses">
            <img src={logo} />
          </Link>
        </div>
        <div className="nav__menu">
          {inventoryLink}
          {locationLink}
        </div>
      </nav>
    );
  }
}
