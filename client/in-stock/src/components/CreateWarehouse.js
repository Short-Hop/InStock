import React from "react";
import axios from "axios";
import Switch from "react-switch";
import AddButton from "./AddButton";

class CreateWarehouse extends React.Component {
  state = {
    newwarehouse: {
      warehouse: "",
      address: "",
      location: "",
      country: "Toronto",
      name: "",
      position: "",
      description: "Description"
    },
    fields: {},
    erros: {}
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

    if (!fields["country"]) {
      formIsValid = false;
      errors["country"] = "Cannot be empty";
    }
    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "Cannot be empty";
    }

    if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[0-9]+$/)) {
        formIsValid = false;
        errors["name"] = "Only numbers";
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
  render() {
    const submitHandler = event => {
      event.preventDefault();
      const warehouse = event.target.warehouse;
      let warehouseinput = warehouse.value;
      const address = event.target.address;
      let addressinput = address.value;
      const location = event.target.location;
      let locationinput = location.value;
      const country = event.target.country;
      let countryinput = country.value;
      const name = event.target.name;
      let nameinput = name.value;
      const position = event.target.position;
      let positioninput = position.value;
      const description = event.target.description;
      let descriptioninput = description.value;

      axios.post(`http://localhost`, {
        warehouse: warehouseinput,
        address: addressinput,
        location: locationinput,
        country: countryinput,
        name: nameinput,
        // status: statusinput,
        description: descriptioninput
      });

      warehouse.value = "";
      address.value = "";
      location.value = "";
      country.value = "";
      name.value = "";
      // status.value = "";
      description.value = "";

      if (this.handleValidation()) {
        alert("Form submitted");
      } else {
        alert("Form has errors.");
      }
    };

    return (
      <>
        <div className="createnew">
          <h1 className="createnew__title">Add New</h1>
          <div className="createnew__form">
            <form onSubmit={submitHandler}>
              <div className="row">
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
              </div>
              <div className="row">
                <div className="column">
                  <label>Location</label>
                  <select
                    name="toronto"
                    id="toronto"
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

export default CreateWarehouse;
