import React from "react";
import toggle_on from "./assets/Icons/SVG/Icon-toggle_on.svg";
import toggle_off from "./assets/Icons/SVG/Icon-toggle_off.svg";

class CreateProduct extends React.Component {
  render() {
    return (
      <div className="createnew">
        <h1 className="createnew__title">Create New</h1>
        <div className="createnew__form">
          <form>
            <label>
              <h2 />
              Product
            </label>
            <input type="text" id="product" placeholder="Item Name" />
            <label>Last Ordered</label>
            <input type="text" id="ordered" placeholder="yyyy-mm-dd" />
            <label>City</label>
            <input type="text" id="city" placeholder="City" />
            <label>Country</label>
            <select name="country" id="country">
              <option value="Canada" selected>
                Canada
              </option>
              <option value="USA">USA</option>
              <option value="France">France</option>
            </select>
            <label>Quantity</label>
            <input type="text" id="quantity" placeholder="0" />
            <label>Status</label>
            <div id="status">
              <img src={toggle_on} />
            </div>
            <label>Item Description</label>
            <input type="text" id="description" placeholder="(Optional)" />
            <button id="Save">Save</button>
            <button id="Cancel">Cancel</button>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateProduct;
