import React from "react";
import axios from "axios";
import Mohan from "../assets/Images/Mohan-muruge.jpg";

class CreateProduct extends React.Component {
  render() {
    return;
    <>
      <h1>Create New</h1>
      <form>
        <label>Product</label>
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
        <button>Save</button>
        <button>Cancel</button>
      </form>
    </>;
  }
}

export default CreateProduct;
