import React, { Component } from "react";
import Arrow from "../assets/Icons/SVG/Icon-back-arrow.svg";
import Inventory from "./Inventory";

export default class WarehouseName extends Component {
  render() {
    return (
      <div className="warehouseName">
        <div className="warehouseName__title">
          <img src={Arrow} />
          <h1>{this.props.name}</h1>
        </div>
        <div className="warehouseName__detail">
          <div className="warehouseName__detail--address">
            <h3>ADDRESS</h3>
            <p>{this.props.address.street}</p>
            <p>{this.props.address.buildingNumber}</p>
            <p id="space">{this.props.city}</p>
            <p>{this.props.postalCode}</p>
          </div>
          <div className="warehouseName__detail--contact">
            <h3>CONTACT</h3>
            <p>{this.props.contact.name}</p>
            <p>{this.props.contact.position}</p>
            <p id="space">{this.props.contact.phone}</p>
            <p>{this.props.contact.email}</p>
          </div>
        </div>
        <Inventory />
      </div>
    );
  }
}
