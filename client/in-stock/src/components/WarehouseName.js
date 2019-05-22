import React, { Component } from "react";
import Arrow from "../assets/Icons/SVG/Icon-back-arrow.svg";
import Inventory from "./Inventory"

export default class WarehouseName extends Component {
  render() {
    return (
      <div className="warehouseName">
        <div className="warehouseName__title">
          <img src={Arrow} />
          <h1>Warehouse Name</h1>
        </div>
        <div className="warehouseName__detail">
          <div className="warehouseName__detail--address">
            <h3>ADDRESS</h3>
            <p>123 Main Street W.</p>
            <p>Suite 201</p>
            <p id="space">Toronto, ON</p>
            <p> M65GB7 CA</p>
          </div>
          <div className="warehouseName__detail--contact">
            <h3>CONTACT</h3>
            <p>Mara Weinberg</p>
            <p>Warehouse Manager</p>
            <p id="space">+1 416 678 2345</p>
            <p>weinberg@instock.com</p>
          </div>
        </div>
        <Inventory/>
      </div>
    );
  }
}
