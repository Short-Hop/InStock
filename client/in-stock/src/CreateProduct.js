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
            <div className="row">
              <div className="column">
                <label>Product</label>
                <input type="text" id="product" placeholder="Item Name" />
              </div>
              <div className="column">
                <label>Last Ordered</label>
                <input type="text" id="ordered" placeholder="yyyy-mm-dd" />
              </div>
            </div>
            <div className="row">
              <div className="column">
                <label>City</label>
                <input type="text" id="city" placeholder="City" />
              </div>
              <div className="column">
                <label>Country</label>
                <select name="country" id="country">
                  <option value="Canada" selected>
                    Canada
                  </option>
                  <option value="USA">USA</option>
                  <option value="France">France</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="column">
                <label>Quantity</label>
                <input type="text" id="quantity" placeholder="0" />
              </div>
              <div className="column">
                <label>Status</label>
                <div id="status">
                  <p>In stock</p>
                  <img src={toggle_on} />
                </div>
              </div>
            </div>
            <label>Item Description</label>
            <input type="text" id="description" placeholder="(Optional)" />
            <div className="form__buttons">
              <button id="Save">Save</button>
              <button id="Cancel">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateProduct;
