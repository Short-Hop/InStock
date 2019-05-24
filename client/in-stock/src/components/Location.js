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
          contactname: warehouse.contact.name, //contact.name
          contactposition: warehouse.contact.position,
          contactphone: warehouse.contact.phone,
          contactemail: warehouse.contact.email,
          id: warehouse.products.id,
          productsname: warehouse.products.name,
          shortDescription: warehouse.products.shortDescription,
          refNumber: warehouse.products.refNumber
          // city: warehouse.products.location
          // country: warehouse.products.location.country,
          // orderDate: warehouse.products.orderDate,
          // orderBy: warehouse.products.orderBy,
          // quantity: warehouse.products.quantity,
          // categories: warehouse.products.categories,
          // inStock: warehouse.products.inStock
        };
      });

      this.setState({
        warehouses: warehousesArray
      });
      console.log(warehousesArray);
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
