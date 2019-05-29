import React from "react";
import arrow from "../assets/Icons/SVG/Icon-back-arrow.svg";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import axios from "axios";

class Product extends React.Component {
  state = {
    product: {
      id: "",
      name: "",
      shortDescription: "",
      longDescription: "",
      refNumber: "",
      location: {
        city: "",
        country: ""
      },
      orderDate: "",
      orderBy: "",
      quantity: 0,
      categories: [],
      inStock: false
    },

    editForm: false
  };

  componentDidMount() {
    axios
      .get(
        "http://localhost:8080/api/warehouses/" +
          this.props.match.params.warehouseId +
          "/product/" +
          this.props.match.params.id
      )
      .then(response => {
        this.setState({
          product: response.data
        });
      });
  }

  printCategories = () => {
    let string = "";
    this.state.product.categories.forEach(category => {
      string += category + ", ";
    });
    string = string.substr(0, string.length - 2);
    return string;
  };

  render() {
    let indicator;
    if (this.state.product.inStock) {
      indicator = <div className="product__inStock">In Stock</div>;
    } else {
      indicator = <div className="product__outStock">Out of Stock</div>;
    }

    return (
      <>
        <Nav page={this.props.match.path} />
        <div className="product">
          <div className="product__header">
            <div>
              <Link to="/inventory">
                <img src={arrow} alt="arrow" />
              </Link>

              <h1>{this.state.product.name}</h1>
            </div>
            {indicator}
          </div>
          <div className="divider" />

          <div className="product__details">
            <div className="product__description">
              <h5>ITEM DESCRIPTION</h5>
              <h4>{this.state.product.longDescription}</h4>
            </div>
            <div className="product__info">
              <div>
                <div>
                  <h5>ORDERED BY</h5>
                  <h4>{this.state.product.orderBy}</h4>
                </div>
                <div>
                  <h5>REFERENCE NUMBER</h5>
                  <h4>{this.state.product.refNumber}</h4>
                </div>
              </div>

              <div>
                <div>
                  <h5>LAST ORDERED</h5>
                  <h4>{this.state.product.orderDate}</h4>
                </div>
                <div>
                  <h5>LOCATION</h5>
                  <h4>
                    {" "}
                    {this.state.product.location.city +
                      ", " +
                      this.state.product.location.country}
                  </h4>
                </div>
              </div>

              <div>
                <div>
                  <h5>QUANTITY</h5>
                  <h4>{this.state.product.quantity}</h4>
                </div>
              </div>

              <div>
                <div>
                  <h5>CATEGORIES</h5>
                  <h4>{this.printCategories()}</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="divider" />
          <button>
            <Link
              className="link"
              to={
                "/warehouse/" +
                this.state.product.warehouseId +
                "/inventory/" +
                this.state.product.id +
                "/edit"
              }
            >
              EDIT
            </Link>
          </button>
        </div>
      </>
    );
  }
}

export default Product;
