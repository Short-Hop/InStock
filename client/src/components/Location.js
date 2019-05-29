import React from "react";
import rightArrow from "../assets/Icons/SVG/Icon-arrow-right.svg";

import { Link } from "react-router-dom";

export default class Location extends React.Component {
  render() {
    return (
      <>
        <section className="location">
          <table className="location__table">
            <tbody>
              <MainRow />

              {this.props.warehouseArray.map(warehouse => (
                <LocationEntry warehouse={warehouse} key={warehouse.id} />
              ))}
            </tbody>
          </table>
        </section>
      </>
    );
    function MainRow() {
      return (
        <>
          <tr className="main-row">
            <th>
              <h5>WAREHOUSE</h5>
            </th>

            <th>
              <h5>CONTACT</h5>
            </th>

            <th>
              <h5>CONTACT INFORMATION</h5>
            </th>

            <th>
              <h5>CATEGORIES</h5>
            </th>
            <th />
          </tr>
          <tr />
        </>
      );
    }

    function LocationEntry(props) {
      return (
        <>
          <tr className="row1">
            <td className="row1__col-mobile">
              <Link className="link" to={"/warehouse/" + props.warehouse.id}>
                <div className="arrow-control">
                  <h3 className="title">
                    {props.warehouse.name} {props.warehouse.number + 1}
                  </h3>
                  <img
                    className="rightArrowImg1"
                    src={rightArrow}
                    alt="arrow"
                  />
                </div>
              </Link>

              <h4>
                {props.warehouse.address.buildingNumber},{" "}
                {props.warehouse.address.street}, {props.warehouse.address.city}
                , {props.warehouse.address.province}
              </h4>
            </td>
          </tr>

          <tr className="row2">
            <td className="row2__col-desk row2__item">
              <Link className="link" to={"/warehouse/" + props.warehouse.id}>
                <div className="arrow-control">
                  <h3 className="title">
                    {props.warehouse.name} {props.warehouse.number + 1}
                  </h3>
                  <img
                    className="rightArrowImg1"
                    src={rightArrow}
                    alt="arrow"
                  />
                  <h4>
                    {props.warehouse.address.buildingNumber},{" "}
                    {props.warehouse.address.street},{" "}
                    {props.warehouse.address.city},{" "}
                    {props.warehouse.address.province}
                  </h4>
                </div>
              </Link>
            </td>
            <td className="row2__item">
              <h4>{props.warehouse.contact.name}</h4>
              <h4 className="position">{props.warehouse.contact.position}</h4>
            </td>
            <td className="row2__item">
              <h4>{props.warehouse.contact.phone}</h4>
              <h4>{props.warehouse.contact.email}</h4>
            </td>
            <td className="row2__item">
              <h4>
                {props.warehouse.categories[0]}, {props.warehouse.categories[1]}
                , {props.warehouse.categories[2]},{" "}
              </h4>
              <h4>
                {props.warehouse.categories[3]}, {props.warehouse.categories[4]}
              </h4>
            </td>
            <td className="row2__col-last row2__item">
              <Link className="link" to={"/warehouse/" + props.warehouse.id}>
                <img className="rightArrowImg2" src={rightArrow} alt="arrow" />
              </Link>
            </td>
          </tr>
          <tr>
            <td colSpan="5" className="hrContainer">
              <hr className="hr" />
            </td>
          </tr>
        </>
      );
    }
  }
}
