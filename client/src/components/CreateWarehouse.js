import React from "react";
import axios from "axios";
import Add from "../assets/Icons/SVG/Icon-add.svg";
import AddButtonWs from "./AddButtonWs";

class CreateWarehouse extends React.Component {
  state = {
    newWarehouse: {
      id: "", //create id in backend
      warehouse: "",
      address: "",
      location: "",
      name: "",
      position: "",
      phone: "",
      email: "",
      description: ""
    },
    fields: {},
    erros: {},

    displayForm: false
  };
  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["warehouse"]) {
      formIsValid = false;
      errors["warehouse"] = "Cannot be empty";
    }

    if (!fields["address"]) {
      formIsValid = false;
      errors["address"] = "Cannot be empty";
    }

    if (typeof fields["address"] !== "undefined") {
      if (!fields["address"].match(/^[0-9]+$/)) {
        formIsValid = false;
        errors["address"] = "Only numbers";
      }
    }

    if (!fields["location"]) {
      formIsValid = false;
      errors["location"] = "Cannot be empty";
    }

    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "Cannot be empty";
    }
    if (!fields["position"]) {
      formIsValid = false;
      errors["position"] = "Cannot be empty";
    }

    if (!fields["phone"]) {
      formIsValid = false;
      errors["phone"] = "Cannot be empty";
    }

    if (typeof fields["phone"] !== "undefined") {
      if (!fields["phone"].match(/^[0-9]+$/)) {
        formIsValid = false;
        errors["phone"] = "Only numbers";
      }
    }

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
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
    console.log("Toggle called");

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
    // const warehouse = event.target.warehouse; // backend
    // let warehouseinput = warehouse.value;
    const address = event.target.address;
    let addressinput = address.value;
    const location = event.target.location;
    let locationinput = location.value;
    const name = event.target.name;
    let nameinput = name.value;
    const position = event.target.position;
    let positioninput = position.value;
    const phone = event.target.phone;
    let phoneinput = phone.value;
    const email = event.target.email;
    let emailinput = email.value;
    const description = event.target.description;
    let descriptioninput = description.value;


    axios.post("/warehouses", {
      // warehouse: warehouseinput,
      address: addressinput,
      location: locationinput,
      name: nameinput,
      position: positioninput,
      phone: phoneinput,
      email: emailinput,
      description: descriptioninput
    });
    // warehouse.value = "";
    address.value = "";
    location.value = "";
    name.value = "";
    position.value = "";
    phone.value = "";
    email.value = "";
    description.value = "";
  };

  render() {
    let form;
    if (this.state.displayForm) {
      form = (
        <div className="shadow">
          <div className="createnew">
            <h1 className="createnew__title">Add New</h1>
            <div className="createnew__form">
              <form onSubmit={this.submitHandler}>
                <div className="column">
                  <div className="column">
                    <label>Warehouse</label>
                    <input
                      type="text"
                      id="warehouse"
                      placeholder="Name &amp; ID"
                      onChange={this.handleChange.bind(this, "warehouse")}
                      value={this.state.fields["warehouse"]}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="column">
                    <label>Address</label>
                    <input
                      type="text"
                      id="address"
                      placeholder="Enter Address"
                      onChange={this.handleChange.bind(this, "address")}
                      value={this.state.fields["address"]}
                    />
                  </div>
                  <div className="column" id="selectdiv">
                    <label>Location</label>
                    <select
                      name="location"
                      id="location"
                      onChange={this.handleChange.bind(this, "location")}
                      value={this.state.fields["location"]}
                    >
                      <option value="Toronto" selected>
                        Toronto, CAN
                      </option>
                      <option value="Vancouver">Vancouver, CAN</option>
                      <option value="Ontario">Ontario, CAN</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="column">
                    <label>Contact Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter Name"
                      onChange={this.handleChange.bind(this, "name")}
                      value={this.state.fields["name"]}
                    />
                  </div>
                  <div className="column">
                    <label>Position</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter Position"
                      onChange={this.handleChange.bind(this, "position")}
                      value={this.state.fields["position"]}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="column">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      id="phone"
                      placeholder="(000) 000 - 000"
                      onChange={this.handleChange.bind(this, "phone")}
                      value={this.state.fields["phone"]}
                    />
                  </div>
                  <div className="column">
                    <label>Email</label>
                    <input
                      type="text"
                      id="email"
                      placeholder="email@instock.com"
                      onChange={this.handleChange.bind(this, "position")}
                      value={this.state.fields["position"]}
                    />
                  </div>
                </div>
                <div className="column">
                  <label>Item Description</label>
                  <textarea
                    id="description"
                    placeholder="Use commas to separate each category"
                    onChange={this.handleChange.bind(this, "description")}
                    value={this.state.fields["description"]}
                  />
                </div>
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
        <AddButtonWs Popup={this.toggleForm} />
      </>
    );
  }
}

export default CreateWarehouse;
