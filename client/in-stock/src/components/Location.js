import React from "react";
import rightArrow from "../assets/Icons/SVG/Icon-arrow-right.svg";
import axios from "axios";

export default class Location extends React.Component {
  state = {
    warehouses: []
  };

  componentDidMount() {
    axios.get(`http://localhost:8080/warehouses`).then(response => {
    const warehousesArray = response.data.map(warehouse => {
      return {
        name: warehouse.name,
        number: response.data.number,
          // address.buildingNumber: warehouse.address.buildingNumber,
          street: response.data.address.street,
          city: response.data.address.city,
          province: response.data.address.province,
          postalCode: response.data.address.postalCode,
          country: response.data.address.country
      
          contact.name: warehouse.contact.name,
          position: response.data.contact.position,
          phone: response.data.contact.phone,
          email: response.data.contact.email
        }
        products: response.data.products [{
          id: response.data.products.id,
          name: response.data.products.name,
          shortDescription: response.data.products.shortDescription,
          longDescription: response.data.products.longDescription,
          refNumber: response.data.products.refNumber,
          location: response.data.products.location {
          city: response.data.products.location.city,
          country: response.data.products.location.country
          }
          orderDate: response.data.products.orderDate,
          orderBy: response.data.products.orderBy,
          quantity: response.data.products.quantity,
          categories: response.data.products.categories,
          inStock: response.data.products.inStock,
        }]

      }
    })
    this.setState(
      warehouses : warehousesArray
      }
    });
    )
  }
  render() {
    return (
      <section className="location">
        <table className="location_table">
          <div className="row-level">
            <div>
              <tr className="row-level-row1">
                <tr className="row-level-main">
                  {}
                  <h5>WAREHOUSE</h5>
                </tr>
                <div className="location-content">
                  <h3 className="title">
                    {response.data[0].name}
                    {name}
                    { {data.number} */}
                  </h3>
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
