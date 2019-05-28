import React, { Component } from "react";
import Arrow from "../assets/Icons/SVG/Icon-back-arrow.svg";
import Inventory from "./Inventory";
import Nav from "./Nav";

const warehouseUrl = `http://localhost:8080/location/warehouseId`;
export default class WarehouseName extends Component {
  render() {
    return (
      <>
        <Nav page={this.props.match.path} />
        <div className="warehouseName">
          <div className="warehouseName__title">
            <img src={Arrow} />
            <h1>{this.props.id.name}</h1>
          </div>
          <div className="warehouseName__detail">
            <div className="warehouseName__detail--address">
              <h3>ADDRESS</h3>
              <p>{this.state.address.street}</p>
              <p>{this.state.address.buildingNumber}</p>
              <p id="space">{this.props.city}</p>
              <p>{this.state.postalCode}</p>
            </div>
            <div className="warehouseName__detail--contact">
              <h3>CONTACT</h3>
              <p>{this.state.contact.name}</p>
              <p>{this.state.contact.position}</p>
              <p id="space">{this.state.contact.phone}</p>
              <p>{this.state.contact.email}</p>
            </div>
          </div>
          <Inventory />
        </div>
      </>
    );
  }
}
