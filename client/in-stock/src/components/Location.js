import React from "react";
import axios from "axios";
import WarehouseList from "./WarehouseList";

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
      </>
    );
  }
}
