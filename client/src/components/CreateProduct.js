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
      status: true,
      description: "Description"
    },
    fields: {},
    erros: {},

    displayForm: false
  };

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["product"]) {
      formIsValid = false;
      errors["product"] = "Cannot be empty";
    }

    if (!fields["ordered"]) {
      formIsValid = false;
      errors["ordered"] = "Cannot be empty";
    }

    if (typeof fields["ordered"] !== "undefined") {
      if (!fields["ordered"].match(/^[0-9]+$/)) {
        formIsValid = false;
        errors["ordered"] = "Only numbers";
      }
    }

    if (!fields["city"]) {
      formIsValid = false;
      errors["city"] = "Cannot be empty";
    }

    if (!fields["country"]) {
      formIsValid = false;
      errors["country"] = "Cannot be empty";
    }
    if (!fields["quantity"]) {
      formIsValid = false;
      errors["quantity"] = "Cannot be empty";
    }

    if (typeof fields["quantity"] !== "undefined") {
      if (!fields["quantity"].match(/^[0-9]+$/)) {
        formIsValid = false;
        errors["quantity"] = "Only numbers";
      }
    }

    if (!fields["status"]) {
      formIsValid = false;
      errors["status"] = "Cannot be empty";
    }
    this.setState({ errors: errors });
    return formIsValid;
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

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
    let status = this.state.newProduct.status;
    console.log(this.state.newProduct.status)
    const description = event.target.description;
    let descriptioninput = description.value;

    axios.post("http://localhost:8080/api/warehouses/product", {
      product: productinput,
      ordered: orderedinput,
      city: cityinput,
      country: countryinput,
      quantity: quantityinput,
      status: status,
      description: descriptioninput
    });

    product.value = "";
    ordered.value = "";
    city.value = "";
    country.value = "";
    quantity.value = "";
    // status.value = "";
    description.value = "";

    this.setState({
      displayForm: false
    });
  };
  render() {
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
                    <input
                      type="text"
                      id="product"
                      placeholder="Item Name"
                      onChange={this.handleChange.bind(this, "product")}
                      value={this.state.fields["product"]}
                    />
                  </div>
                  <div className="column">
                    <label>Last Ordered</label>
                    <input
                      type="text"
                      id="ordered"
                      placeholder="yyyy-mm-dd"
                      onChange={this.handleChange.bind(this, "ordered")}
                      value={this.state.fields["ordered"]}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="column">
                    <label>City</label>
                    <input
                      type="text"
                      id="city"
                      placeholder="City"
                      onChange={this.handleChange.bind(this, "city")}
                      value={this.state.fields["city"]}
                    />
                  </div>
                  <div className="column" id="selectdiv">
                    <label>Country</label>
                    <select
                      name="country"
                      id="country"
                      onChange={this.handleChange.bind(this, "country")}
                      value={this.state.fields["country"]}
                    >
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
                    <input
                      type="text"
                      id="quantity"
                      placeholder="0"
                      onChange={this.handleChange.bind(this, "quantity")}
                      value={this.state.fields["quantity"]}
                    />
                  </div>
                  <div className="column">
                    <label>Status</label>
                    <div id="status">
                      <p>In stock</p>
<<<<<<< HEAD
                      {/* <Switch
                        checked={this.state.product.inStock}
                        onColor="#6BB01A"
                        checkedIcon={false}
                        uncheckedIcon={false}
                      /> */}
=======
                      <Switch name="inStock" checked={this.state.status} onColor="#6BB01A" checkedIcon={false} uncheckedIcon={false} onChange={(checked) => { this.setState({ newProduct: {status: checked} })}}/>
>>>>>>> 94162bc4fd1c5fe31daef45294c9dd4f51eef2e8
                    </div>
                  </div>
                </div>
                <label>Item Description</label>
                <input
                  type="text"
                  id="description"
                  placeholder="(Optional)"
                  onChange={this.handleChange.bind(this, "description")}
                  value={this.state.fields["description"]}
                />
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
