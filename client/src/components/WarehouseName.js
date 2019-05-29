import React, { Component } from "react";
import Arrow from "../assets/Icons/SVG/Icon-back-arrow.svg";
import Inventory from "./Inventory";
import Nav from "./Nav"
import axios from "axios"
import { Link } from "react-router-dom";


const warehouseUrl = `http://localhost:8080/location/warehouseId`;
export default class WarehouseName extends Component {
  state = {
    warehouse: {
      id: "",
      name: "",
      number: "",
      address: {
        buildingNumber: "",
        street: "",
        city: "",
        province: "",
        postalCode: "",
        country: ""
      },
      contact: {
        name: "",
        position: "",
        phone: "",
        email: ""
      },
      products: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8080/api/warehouses/' + this.props.match.params.id).then(response => {
      this.setState({
        warehouse: response.data
      })
    })
  }

  render() {
    return (
      <>
      <Nav page={this.props.match.path}/>
      
      <div className="warehouseName">
        <div>
          <div className="warehouseName__title">
            <Link className="link" to="/warehouses">
              <img src={Arrow} />
            </Link>
            
            <h1>{this.state.warehouse.name + " " + (this.state.warehouse.number + 1)}</h1>
          </div>
          <div className="warehouseName__detail">
            <div className="warehouseName__detail--address">
              <h3>ADDRESS</h3>
              <p>{this.state.warehouse.address.street}</p>
              <p>{this.state.warehouse.address.buildingNumber}</p>
              <p id="space">{this.state.warehouse.address.city}</p>
              <p>{this.state.warehouse.address.postalCode}</p>
            </div>
            <div className="warehouseName__detail--contact">
              <h3>CONTACT</h3>
              <p>{this.state.warehouse.contact.name}</p>
              <p>{this.state.warehouse.contact.position}</p>
              <p id="space">{this.state.warehouse.contact.phone}</p>
              <p>{this.state.warehouse.contact.email}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="background">
        <Inventory productArray={this.state.warehouse.products} />
      </div>
      
      </>
    );
  }
}
