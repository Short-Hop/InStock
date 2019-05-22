import React from "react";
import App from "../App";
import Add from "../assets/Icons/SVG/Icon-add.svg";

class AddButton extends React.Component {
  render() {
    return (
      <>
        <button className="AddButton" onClick="{this.togglePopup.bind(this)}">
          <img src={Add} alt="Add New" />
        </button>
      </>
    );
  }
}
export default AddButton;
