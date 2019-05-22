import React from "react";
import rightArrow from "../assets/Icons/SVG/Icon-arrow-right.svg";

export default class Location extends React.Component {
  render() {
    return (
      <section className="location">
        <h1>Location</h1>
        <table className="location__table">
          <tr className="location__table-row1">
            <div className="location-content">
              <h3 className="title">Warehouse Number 1</h3>
              <img className="rightArrowImg" src={rightArrow} />
            </div>
          </tr>
          <tr>
            <h4>469 King St W, Toronto, ON</h4>
          </tr>

          <br />
          <div class="location__table-container">
            <div className="location__table-content">
              <tr>
                <h4>Mara Weinberg</h4>
              </tr>
              <tr>
                <h4>Warehouse Manager</h4>
              </tr>
            </div>
            <br />
            <div>
              <tr>
                <h4>+1 416 678 2345</h4>
              </tr>
              <tr>
                <h4>weinberg@instack.com</h4>
              </tr>
            </div>
            <br />
            <div>
              <tr>
                <h4>Industrial, Automotive, Heavy, Mechanical,</h4>
              </tr>
              <tr>
                <h4>Engineering, Transportation</h4>
              </tr>
            </div>
          </div>
          <hr className="divider" />
          <tr className="location__table-row1">
            <div className="location-content">
              <h3 className="title">Warehouse Number 1</h3>
              <img className="rightArrowImg" src={rightArrow} />
            </div>
          </tr>
          <tr>
            <h4>469 King St W, Toronto, ON</h4>
          </tr>
          <br />
          <div class="location__table-container">
            <div className="location__table-content">
              <tr>
                <h4>Mara Weinberg</h4>
              </tr>
              <tr>
                <h4>Warehouse Manager</h4>
              </tr>
            </div>
            <br />
            <div>
              <tr>
                <h4>+1 416 678 2345</h4>
              </tr>
              <tr>
                <h4>weinberg@instack.com</h4>
              </tr>
            </div>
            <br />
            <div>
              <tr>
                <h4>Industrial, Automotive, Heavy, Mechanical,</h4>
              </tr>
              <tr>
                <h4>Engineering, Transportation</h4>
              </tr>
            </div>
          </div>
          <hr className="divider" />
          <tr className="location__table-row1">
            <div className="location-content">
              <h3 className="title">Warehouse Number 1</h3>
              <img className="rightArrowImg" src={rightArrow} />
            </div>
          </tr>
          <tr>
            <h4>469 King St W, Toronto, ON</h4>
          </tr>
          <br />
          <div class="location__table-container">
            <div className="location__table-content">
              <tr>
                <h4>Mara Weinberg</h4>
              </tr>
              <tr>
                <h4>Warehouse Manager</h4>
              </tr>
            </div>
            <br />
            <div>
              <tr>
                <h4>+1 416 678 2345</h4>
              </tr>
              <tr>
                <h4>weinberg@instack.com</h4>
              </tr>
            </div>
            <br />
            <div>
              <tr>
                <h4>Industrial, Automotive, Heavy, Mechanical,</h4>
              </tr>
              <tr>
                <h4>Engineering, Transportation</h4>
              </tr>
            </div>
          </div>
        </table>
      </section>
    );
  }
}
