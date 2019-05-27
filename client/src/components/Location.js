import React from "react";
import rightArrow from "../assets/Icons/SVG/Icon-arrow-right.svg";

export default class Location extends React.Component {
  render() {
    return (
      <>
        <WarehouseList warehouses={this.state.warehouses} />;
        <section className="location">
          <table className="location__table">
            <tbody>
              {/* <MainRow /> */}
              <LocationEntry />
              <hr className="divider" />
              <LocationEntry />
              <hr className="divider" />
              <LocationEntry />
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
          </tr>
        </>
      );
    }

    function LocationEntry() {
      return (
        <>
          <tr className="row1">
            <td className="row1__col-mobile">
              <h5 className="main-col">WAREHOUSE</h5>
              <div className="arrow-control">
                <h3 className="title">Warehouse Number 1</h3>
                <img className="rightArrowImg1" src={rightArrow} />
              </div>
              <h4>469 King St W, Toronto, ON</h4>
            </td>
          </tr>
          <tr className="row2">
            <td className="row2__col-desk">
              <div className="arrow-control">
                <h5 className="row2__main-col">WAREHOUSE</h5>
                <h3 className="title">Warehouse Number 1</h3>
                <img className="rightArrowImg1" src={rightArrow} />
                <h4>469 King St W, Toronto, ON</h4>
              </div>
            </td>
            <td>
              <h5 className="main-col">CONTACT</h5>
              <h4>Warehouse Manager</h4>
              <h4>Mara Weinberg</h4>
            </td>
            <td>
              <h5 className="main-col">CONTACT INFORMATION</h5>
              <h4>+1 416 678 2345</h4>
              <h4>weinberg@instack.com</h4>
            </td>
            <td>
              <h5 className="main-col">CATEGORIES</h5>
              <h4>Industrial, Automotive, Heavy, Mechanical,</h4>

              <h4>Engineering, Transportation</h4>
            </td>
            <td className="row2__col-last">
              <img className="rightArrowImg2" src={rightArrow} />
            </td>
          </tr>
        </>
      );
    }
  }
}
