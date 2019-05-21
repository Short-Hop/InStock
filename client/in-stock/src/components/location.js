import React, { Component } from "react";
//import "../styles/location.css";
export default class Location extends Component {
  render() {
    return (
      <section className="location">
        <table className="location__table">
          <tr className="location__table-row">
            <td>
              <h3 className="ware">Warehouse Number 1</h3>
            </td>
            <td>
              <h3>></h3>
            </td>
          </tr>
          <tr>469 King St W, Toronto, ON</tr>
          <br />
          <tr>Mara Weinberg </tr>
          <tr>Warehouse Manager</tr>
          <br />
          <tr>+1 416 678 2345 </tr>
          <tr>weinberg@instack.com</tr>
          <br />
          <tr>Industrial, Automotive, Heavy, Mechanical,</tr>
          <tr>Engineering, Transportation</tr>
          <tr />
          <hr />
          <tr className="location__table-row">
            <td>
              <h3>Warehouse Number 2</h3>
            </td>
            <td>
              <h3>></h3>
            </td>
          </tr>
          <tr>469 King St W, Toronto, ON</tr>
          <br />
          <tr>Mara Weinberg </tr>
          <tr>Warehouse Manager</tr>
          <br />
          <tr>+1 416 678 2345 </tr>
          <tr>weinberg@instack.com</tr>
          <br />
          <tr>Industrial, Automotive, Heavy, Mechanical,</tr>
          <tr>Engineering, Transportation</tr>
          <tr />
          <hr />
        </table>
      </section>
    );
  }
}
