import React, { Component } from "react";
import Arrow from "../assets/Icons/SVG/Icon-back-arrow.svg";
import Inventory from "./Inventory";
import Nav from "./Nav";

export default class WarehouseName extends Component {
  render() {
    let Num = Number(this.props.warehouseId);
    console.log(this.props.warehouseId);
    console.log(this.props.warehouseArray[Num]);
    const warehouse = this.props.warehouseArray[Num];

    return (
      <>
        <Nav page={this.props.match.path} />
        <div className="warehouseName">
          <div className="warehouseName__title">
            <img src={Arrow} />
            <h1>{warehouse.name}</h1>
          </div>
          <div className="warehouseName__detail">
            <div className="warehouseName__detail--address">
              <h3>ADDRESS</h3>
              <p>{warehouse.address.street}</p>
              <p>{warehouse.address.buildingNumber}</p>
              <p id="space">{warehouse.address.city}</p>
              <p>{warehouse.address.postalCode}</p>
            </div>
            <div className="warehouseName__detail--contact">
              <h3>CONTACT</h3>
              <p>{warehouse.contact.name}</p>
              <p>{warehouse.contact.position}</p>
              <p id="space">{warehouse.contact.phone}</p>
              <p>{warehouse.contact.email}</p>
            </div>
          </div>
          <div>
            <Inventory />
          </div>
        </div>
      </>
    );
  }
}
