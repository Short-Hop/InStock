import React from "react";
import axios from "axios";
import AddButton from "./AddButton";

class CreateWarehouse extends React.Component {
  state = {
    newWarehouse: {
      warehouse: "",
      address: "",
      location: "",
      name: "",
      position: "",
      phone: "",
      email: "",
      description: ""
    },
    displayForm: false
  };

  submitHandler = event => {
    event.preventDefault();
    let warehouseinput = event.target.warehouse.value;
    let addressinput = event.target.address.value;
    const location = event.target.location;
    let locationinput = location.options[location.selectedIndex].value;
    let nameinput = event.target.name.value;
    let positioninput = event.target.position.value;
    let phoneinput = event.target.phone.value;
    let emailinput = event.target.email.value;
    let descriptioninput = event.target.description.value;

    if (warehouseinput === "") {
      warehouseinput = "Warehouse Number";
    }

    if (addressinput === "") {
      return alert("Please enter a warehouse address");
    }
    if (locationinput === "") {
      return alert("Please enter a warehouse location");
    }
    if (nameinput === "") {
      return alert("Please enter a contact name");
    }
    if (positioninput === "") {
      return alert("Please enter a position entry");
    }
    if (phoneinput === "") {
      return alert("Please enter a phone number");
    }
    if (emailinput === "") {
      return alert("Please enter an email");
    }
    console.log(addressinput);
    axios
      .post("http://localhost:8080/api/warehouses", {
        name: warehouseinput,
        number: warehouseinput,
        address: {
          street: addressinput,
          city: locationinput
        },
        contact: {
          name: nameinput,
          position: positioninput,
          phone: phoneinput,
          email: emailinput
        },
        description: descriptioninput
      })

      .then(response => {
        this.setState({
          displayForm: false,
          newWarehouse: response.data
        });
        this.props.onSuccess(this.state.newWarehouse);
      });
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
                    />
                  </div>
                  <div className="column" id="selectdiv">
                    <label>Location</label>
                    <select name="location" id="location">
                      <option value="Toronto">
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
                    <input type="text" id="name" placeholder="Enter Name" />
                  </div>
                  <div className="column">
                    <label>Position</label>
                    <input
                      type="text"
                      id="position"
                      placeholder="Enter Position"
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
                    />
                  </div>
                  <div className="column">
                    <label>Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="email@instock.com"
                    />
                  </div>
                </div>
                <div className="column">
                  <label>Item Description</label>
                  <textarea
                    id="description"
                    placeholder="Use commas to separate each category"
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
        <AddButton Popup={this.toggleForm} />
      </>
    );
  }
}

export default CreateWarehouse;
