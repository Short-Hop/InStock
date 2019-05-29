import React from "react";
import axios from "axios";
import Switch from "react-switch";
import AddButton from "./AddButton";

class CreateProduct extends React.Component {
  state = {
    newProduct: {
      product: "",
      ordered: "",
      city: "",
      country: "Canada",
      quantity: 0,
      inStock: false,
      description: ""
    },
    fields: {},
    erros: {},

    displayForm: false
  };

  toggleForm = () => {
    if (!this.state.displayForm) {
      this.setState({
        displayForm: true
      });
    } else {
      this.setState({
        displayForm: false
      });
    }
  };

  submitHandler = event => {
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
    const inStock = this.state.newProduct.inStock;
    // let inStockinput = this.state.inStock;
    const description = event.target.description;
    let descriptioninput = description.value;

    if (productinput === "") {
      return alert("Please enter a product name");
    }

    if (orderedinput === "") {
      return alert("Please enter an order date");
    }
    if (cityinput === "") {
      return alert("Please enter a city");
    }
    if (quantityinput === "") {
      return alert("Please enter a quantity");
    }

    axios.post("http://localhost:8080/api/warehouses/product", {
      product: productinput,
      ordered: orderedinput,
      city: cityinput,
      country: countryinput,
      quantity: quantityinput,
      inStock: inStock,
      description: descriptioninput
    });

    this.setState({
      displayForm: false
    });
  };

  statusUpdate = checked => {
    this.setState({
      newProduct: {
        inStock: checked
      }
    });
  };

  render() {
    let indicator;
    if (this.state.newProduct.inStock === true) {
      indicator = "In Stock";
    } else if (this.state.newProduct.inStock === false) {
      indicator = "Out of Stock";
    }

    let form;
    if (this.state.displayForm) {
      form = (
        <div className="shadow">
          <div className="createnew">
            <h1 className="createnew__title">Create New</h1>
            <div className="createnew__form">
              <form onSubmit={this.submitHandler}>
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
                      <p>{indicator}</p>
                      <Switch
                        name="inStock"
                        onChange={this.statusUpdate}
                        checked={this.state.newProduct.inStock}
                        onColor="#6BB01A"
                        checkedIcon={false}
                        uncheckedIcon={false}
                      />
                    </div>
                  </div>
                </div>
                <label>Item Description</label>
                <input type="text" id="description" placeholder="(Optional)" />
                <div className="form__buttons">
                  <button id="Save">Save</button>
                  <button id="Cancel" onClick={this.toggleForm}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }

    return (
      <>
        {form}
        <AddButton Popup={this.toggleForm} />
      </>
    );
  }
}

export default CreateProduct;
