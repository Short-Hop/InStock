import React from "react";
import Switch from "react-switch";
import AddButton from "./AddButton";

class CreateProduct extends React.Component {
  state = {
    newProduct: {
      Product: "",
      Ordered: "",
      City: "",
      Country: "Canada",
      Quantity: 0,
      Status: true,
      Description: "Description"
    }
  };
  render() {
    const submitHandler = event => {
      event.preventDefault();
      const product = event.target.product;
      let productinput = product.value;
      const ordered = event.target.ordered;
      let orderedinput = ordered.value;
      const city = event.target.city;
      let cityinput = city.value;
      const country = event.target.country;
      let countryinput = country.value;
      const quantity = event.target.quantity;
      let quantityinput = quantity.value;
      const status = event.target.status;
      let statusinput = status.value;
      const description = event.target.description;
      let descriptioninput = description.value;

      axios.post(`http://localhost`, {
        Product: productinput,
        Ordered: orderedinput,
        City: cityinput,
        Country: countryinput,
        Quantity: quantityinput,
        Status: statusinput,
        Description: descriptioninput
      });

      product.value = "";
      ordered.value = "";
      city.value = "";
      country.value = "";
      quantity.value = "";
      status.value = "";
      description.value = "";
    };

    return (
      <>
        <div className="createnew">
          <h1 className="createnew__title">Create New</h1>
          <div className="createnew__form">
            <form onSubmit={submitHandler}>
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
                <div className="column" id="selectdiv">
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
                    <Switch />
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
        <AddButton Popup={this.state} />
      </>
    );
  }
}

export default CreateProduct;
