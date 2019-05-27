import React from "react";
import kebab from "../assets/Icons/SVG/Icon-kebab-default.svg";
import { Link } from "react-router-dom";
import App from "../App";

class InventoryItem extends React.Component {
  state = {
    displayRemove: false
  };

  componentDidMount() {
    let body = document.querySelector("body");
    body.addEventListener("click", () => {
      this.setState({
        displayRemove: false
      });
      let mobileKebab = document.querySelector(".inventory__mobile--kebab");
      let kebab = document.querySelector(".inventory__kebab");
      if (mobileKebab && kebab) {
        mobileKebab.childNodes[0].style.filter = "brightness(1)";
        kebab.childNodes[0].style.filter = "brightness(1)";
      }
    });
  }

  displayRemoveButton = () => {
    this.setState({
      displayRemove: true
    });
    let mobileKebab = document.querySelector(".inventory__mobile--kebab");
    let kebab = document.querySelector(".inventory__kebab");
    mobileKebab.childNodes[0].style.filter = "brightness(0.5)";
    kebab.childNodes[0].style.filter = "brightness(0.5)";
  };

  render() {
    let status = this.props.product.inStock ? "IN STOCK" : "OUT OF STOCK";

    let removeButton;
    if (this.state.displayRemove) {
      removeButton = <button className="inventory__remove">Remove</button>;
    } else {
      removeButton = <> </>;
    }
    return (
      <>
        <tr>
          <td className="inventory__mobile--kebab">
            <button onClick={this.displayRemoveButton}>
              <img src={kebab} alt={"more"} />
            </button>
            {removeButton}
          </td>
          <td className="inventory__mobile--label">ITEM</td>
          <td className="inventory__item">
            <Link className="link" to={"/inventory/" + this.props.product.id}>
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
                <img src={kebab} alt={"more"} />
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
