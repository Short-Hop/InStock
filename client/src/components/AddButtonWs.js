import React from "react";
import App from "../App";
import Add from "../assets/Icons/SVG/Icon-add.svg";

class AddButtonWs extends React.Component {
  state = {
    showPopup: false
  };
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  render() {
    const Popup = this.props.state;
    return (
      <>
        <button className="AddButton" onClick={this.props.Popup}>
          <img src={Add} alt="Add New" />
        </button>
      </>
    );
  }
}
export default AddButtonWs;
