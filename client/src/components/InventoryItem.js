import React from "react";
import kebab from "../assets/Icons/SVG/Icon-kebab-default.svg";
import { Link } from "react-router-dom";

class InventoryItem extends React.Component {

  state = {
    displayRemove: false
  };

  componentDidMount() {
    let body = document.querySelector("body");
    body.addEventListener("click", this.hideRemoveButton);
  }

  componentWillUnmount() {
    let body = document.querySelector("body");
    body.removeEventListener("click", this.hideRemoveButton);
  }

  displayRemoveButton = event => {
    this.setState({
      displayRemove: true
    });
    event.target.style.filter = "brightness(0.5)";
    event.target.style.filter = "brightness(0.5)";
  };

  hideRemoveButton = event => {
    let mobileKebab = document.querySelectorAll(".kebab");
    let kebab = document.querySelectorAll(".kebab");
    let removeButton = document.querySelector(".inventory__remove");

    if (removeButton !== event.target) {
      if (mobileKebab && kebab) {
        kebab.forEach(node => {
          node.style.filter = "brightness(1)";
        });
        mobileKebab.forEach(node => {
          node.style.filter = "brightness(1)";
        });
      }
      this.setState({
        displayRemove: false
      });
    }
  };

  delete = () => {
    this.props.deleteProduct(
      this.props.product.warehouseId,
      this.props.product.id
    );
    this.setState({
      displayRemove: false
    });
  };


  render() {
    let status = this.props.product.inStock ? "IN STOCK" : "OUT OF STOCK";

    let removeButton;
    if (this.state.displayRemove) {
      removeButton = (
        <button
          className="inventory__remove"
          onClick={console.log(this.props.product.id)}
        >
          Remove
        </button>
      );
    } else {
      removeButton = (
        <button className="inventory__remove--hidden" onClick={this.delete}>
          Remove
        </button>
      );
    }
    return (
      <>
        <tr>
          <td className="inventory__mobile--kebab">
            <button onClick={this.displayRemoveButton}>
              <img src={kebab} alt={"more"} className="kebab" />
            </button>
            {removeButton}
          </td>
          <td className="inventory__mobile--label">ITEM</td>
          <td className="inventory__item">
            <Link
              className="link"
              to={
                "warehouse/" +
                this.props.product.warehouseId +
                "/inventory/" +
                this.props.product.id
              }
            >
              <h3>{this.props.product.name}</h3>
              <h4>{this.props.product.shortDescription}</h4>
            </Link>
          </td>
          <td className="inventory__mobile--label">LAST ORDERED</td>
          <td className="inventory__date">
            <h4>{this.props.product.orderDate}</h4>
          </td>
          <td className="inventory__mobile--label">LOCATION</td>
          <td className="inventory__location">
            <h4>
              {this.props.product.location.city +
                ", " +
                this.props.product.location.country}
            </h4>
          </td>
          <td className="inventory__mobile--label">QUANTITY</td>
          <td className="inventory__quantity">
            <h4>{this.props.product.quantity}</h4>
          </td>
          <td className="inventory__mobile--label">STATUS</td>
          <td className="inventory__status">
            <h4>{status}</h4>
            <div className="inventory__kebab">
              <button onClick={this.displayRemoveButton}>
                <img src={kebab} alt={"more"} className="kebab" />
              </button>
              {removeButton}
            </div>
          </td>
        </tr>
        <tr>
          <td colSpan="6" className="divider" />
        </tr>
      </>
    );
  }
}

export default InventoryItem;
