import React from "react";

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
            <input type="text" id="country" placeholder="Item Name" />
            <label>Quantity</label>
            <input type="text" id="quantity" placeholder="0" />
            <label>Status</label>
            <input type="text" id="status" />
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
