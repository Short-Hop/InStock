import React from "react";
import rightArrow from "../assets/Icons/SVG/Icon-arrow-right.svg";

function WarehouseList(props) {
  const { warehouses } = props;
  const warehouseList = warehouses.map((warehouse, key) => {
    return (
      <div key={key}>
        <section className="location">
          <table className="location_table">
            <div className="row-level">
              <div>
                <tr className="row-level-row1">
                  <tr className="row-level-main">
                    <h5>WAREHOUSE</h5>
                  </tr>
                  <div className="location-content">
                    <h3 className="title">{warehouse.name}</h3>
                    <img className="rightArrowImg" src={rightArrow} />
                  </div>
                </tr>
                <tr>
                  <h4>
                    {warehouse.buildingNumber} {warehouse.street}{" "}
                    {warehouse.city} {warehouse.province} {warehouse.postalCode}{" "}
                    {warehouse.country}
                  </h4>
                </tr>
              </div>
              <br />
              <div className="row-level-container">
                <div className="row-level-content">
                  <tr className="row-level-main">
                    <h5>CONTACT</h5>
                  </tr>
                  <tr>
                    <h4>{warehouse.contactname}</h4>
                  </tr>
                  <tr>
                    <h4>{warehouse.contactposition}</h4>
                  </tr>
                </div>
                <br />
                <div>
                  <tr>
                    <h5 className="row-level-main">CONTACT INFORMATION</h5>
                  </tr>
                  <tr>
                    <h4>{warehouse.contactphone}</h4>
                  </tr>
                  <tr>
                    <h4>{warehouse.contactemail}</h4>
                  </tr>
                </div>
                <br />
                <div>
                  <tr className="row-level-main">
                    <h5>CATEGORIES</h5>
                  </tr>
                  <tr className="row-level-content__arrow">
                    <h4>{warehouse.productscategories}</h4>
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
          </table>
        </section>
      </div>
    );
  });
  return <div>{warehouseList}</div>;
}
export default WarehouseList;
