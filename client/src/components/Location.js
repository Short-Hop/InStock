import React from "react";
import rightArrow from "../assets/Icons/SVG/Icon-arrow-right.svg";

export default class Location extends React.Component {
  render() {
    console.log(this.props.warehouseArray);
    return (
      <>
        <section className="location">
          <table className="location__table">
            <tbody>
              <MainRow />

              {this.props.warehouseArray.map(warehouse => (
                <LocationEntry warehouse={warehouse} />
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
          <tr>
            <br />
          </tr>
        </>
      );
    }

    function LocationEntry(props) {
      return (
        <>
          <tr className="row1">
            <td className="row1__col-mobile">
              <div className="arrow-control">
                <h3 className="title">
                  {props.warehouse.name} {props.warehouse.number + 1}
                </h3>
                <img className="rightArrowImg1" src={rightArrow} />
              </div>
              <h4>
                {props.warehouse.address.buildingNumber},{" "}
                {props.warehouse.address.street}, {props.warehouse.address.city}
                , {props.warehouse.address.province}
              </h4>
            </td>
          </tr>
          <tr className="row2">
            <td className="row2__col-desk row2__item">
              <div className="arrow-control">
                <h3 className="title">
                  {props.warehouse.name} {props.warehouse.number + 1}
                </h3>
                <img className="rightArrowImg1" src={rightArrow} />
                <h4>
                  {props.warehouse.address.buildingNumber},{" "}
                  {props.warehouse.address.street},{" "}
                  {props.warehouse.address.city},{" "}
                  {props.warehouse.address.province}
                </h4>
              </div>
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
              <img className="rightArrowImg2" src={rightArrow} />
            </td>
          </tr>
          <hr className="hr" />
        </>
      );
    }
  }
}
