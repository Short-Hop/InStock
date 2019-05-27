import React from "react";
import axios from "axios";
import WarehouseList from "./WarehouseList";
import rightArrow from "../assets/Icons/SVG/Icon-arrow-right.svg";

export default class Location extends React.Component {
  state = {
    warehouses: []
  };

  componentDidMount() {
    axios.get(`http://localhost:8080/warehouses`).then(response => {
      console.log(response.data);
      const warehousesArray = response.data.map(warehouse => {
        return {
          id: warehouse.name,
          name: warehouse.name,
          number: warehouse.number,
          buildingNumber: warehouse.address.buildingNumber,
          street: warehouse.address.street,
          city: warehouse.address.city,
          province: warehouse.address.province,
          postalCode: warehouse.address.postalCode,
          country: warehouse.address.country,
          contactname: warehouse.contact.name,
          contactposition: warehouse.contact.position,
          contactphone: warehouse.contact.phone,
          contactemail: warehouse.contact.email,
          id: warehouse.products.id,
          productsname: warehouse.products.name,
          shortDescription: warehouse.products.shortDescription,
          refNumber: warehouse.products.refNumber,
          productscity: warehouse.products[0].location.city,
          productscountry: warehouse.products[0].location.country,
          productsorderDate: warehouse.products[0].orderDate,
          productsorderBy: warehouse.products[0].orderBy,
          productsquantity: warehouse.products[0].quantity,
          productscategories: warehouse.products[0].categories,
          productsinStock: warehouse.products[0].inStock
        };
      });

      this.setState({
        warehouses: warehousesArray
      });
    });
  }

  render() {
    return (
      <>
        <WarehouseList warehouses={this.state.warehouses} />;
        <section className="location">
          <table className="location_table">
            <LocationEntry />
            <hr className="divider" />
            <LocationEntry />
            <hr className="divider" />
            <LocationEntry />
          </table>
        </section>
      </>
    );

    function LocationEntry() {
      return (
        <div className="row-level">
          <div>
            <tr className="row-level-row1">
              <tr className="row-level-main">
                <h5>WAREHOUSE</h5>
              </tr>
              <div className="location-content">
                <h3 className="title">Warehouse Number 1</h3>
                <img className="rightArrowImg1" src={rightArrow} />
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
                  <img className="rightArrowImg2" src={rightArrow} />
                </div>
              </tr>
              <tr>
                <h4>Engineering, Transportation</h4>
              </tr>
            </div>
          </div>
        </div>
      );
    }
  }
}
