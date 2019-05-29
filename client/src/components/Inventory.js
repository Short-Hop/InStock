import React from "react";
import InventoryItem from "./InventoryItem";

class Inventory extends React.Component {
  getAllProducts = () => {
    let allProducts = [];
    this.props.warehouseArray.forEach(warehouse => {
      warehouse.products.forEach(product => {
        allProducts.push(product);
      });
    });

    return allProducts;
  };

  render() {
    return (
      <div className="inventory">
        <table>
          <tbody>
            <tr>
              <th>ITEM</th>
              <th>LAST ORDERED</th>
              <th>LOCATION</th>
              <th>QUANTITY</th>
              <th>STATUS</th>
            </tr>

            {this.getAllProducts().map(product => (
              <InventoryItem product={product} key={product.id} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Inventory;
