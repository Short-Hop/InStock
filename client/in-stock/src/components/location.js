import React from "react";
import rightArrow from "../assets/Icons/SVG/Icon-arrow-right.svg";
import { Link } from "react-router-dom";

export default class Location extends React.Component {
  render() {
    return (
      <section className="location">
        <table className="location_table">
          <div className="row-level">
            <div>
              <tr className="row-level-row1">
                <tr className="row-level-main">
                  <h5>WAREHOUSE</h5>
                </tr>
                <div className="location-content">
                  <h3 className="title">Warehouse Number 1</h3>
                  <img className="rightArrowImg" src={rightArrow} />
                </div>
              </tr>
              <tr>
                <h4>469 King St W, Toronto, ON</h4>
              </tr>
            </div>
            <br />
            <div className="row-level-container">
              <div className="row-level-content">
                <tr className="row-level-main">
                  <h5>CONTACT</h5>
                </tr>
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
                  <h5 className="row-level-main">CONTACT INFORMATION</h5>
                </tr>
                <tr>
                  <h4>+1 416 678 2345</h4>
                </tr>
                <tr>
                  <h4>weinberg@instack.com</h4>
                </tr>
              </div>
              <br />
              <div>
                <tr className="row-level-main">
                  <h5>CATEGORIES</h5>
                </tr>
                <tr className="row-level-content__arrow">
                  <h4>Industrial, Automotive, Heavy, Mechanical,</h4>
                  <div>
                    <img className="rightArrowImg" src={rightArrow} />
                  </div>
                </tr>
                <tr>
                  <h4>Engineering, Transportation</h4>
                </tr>
              </div>
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
              <tr className="row-level-row1">
                <div className="location-content">
                  <h3 className="title">Warehouse Number 1</h3>
                  <img className="rightArrowImg" src={rightArrow} />
                </div>
              </tr>
              <tr>
                <h4>469 King St W, Toronto, ON</h4>
              </tr>
            </div>
            <br />
            <div className="row-level-container">
              <div className="row-level-content">
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
                <tr className="row-level-content__arrow">
                  <h4>Industrial, Automotive, Heavy, Mechanical,</h4>
                  <dive>
                    <img className="rightArrowImg" src={rightArrow} />
                  </dive>
                </tr>
                <tr>
                  <h4>Engineering, Transportation</h4>
                </tr>
              </div>
            </div>
          </div>
          <hr className="divider" />
          <div className="row-level">
            <div>
              <tr className="row-level-row1">
                <div className="location-content">
                  <h3 className="title">Warehouse Number 1</h3>
                  <img className="rightArrowImg" src={rightArrow} />
                </div>
              </tr>
              <tr>
                <h4>469 King St W, Toronto, ON</h4>
              </tr>
            </div>
            <br />
            <div className="row-level-container">
              <div className="row-level-content">
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
                <tr className="row-level-content__arrow">
                  <h4>Industrial, Automotive, Heavy, Mechanical,</h4>
                  <div>
                    <img className="rightArrowImg" src={rightArrow} />
                  </div>
                </tr>
                <tr>
                  <h4>Engineering, Transportation</h4>
                </tr>
              </div>
            </div>
          </div>
          <hr className="divider" />
          <div className="row-level">
            <div>
              <tr className="row-level-row1">
                <div className="location-content">
                  <h3 className="title">Warehouse Number 1</h3>
                  <img className="rightArrowImg" src={rightArrow} />
                </div>
              </tr>
              <tr>
                <h4>469 King St W, Toronto, ON</h4>
              </tr>
            </div>
            <br />
            <div className="row-level-container">
              <div className="row-level-content">
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
                <tr className="row-level-content__arrow">
                  <h4>Industrial, Automotive, Heavy, Mechanical,</h4>
                  <div>
                    <img className="rightArrowImg" src={rightArrow} />
                  </div>
                </tr>
                <tr>
                  <h4>Engineering, Transportation</h4>
                </tr>
              </div>
            </div>
          </div>
        </table>
      </section>
    );
  }
}
