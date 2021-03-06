import React from "react";
import Nav from "./Nav";
import Header from "./Header";
import Inventory from "./Inventory";
import CreateProduct from "./CreateProduct";

class InventoryPage extends React.Component {
  render() {
    return (
      <>
        <Nav page={this.props.match.path} />
        <Header title="Inventory" />
        <Inventory
          deleteProduct={this.props.deleteProduct}
          productArray={this.props.productArray}
        />
        <CreateProduct
          onSuccess={newProduct => this.props.onProductAdd(newProduct)}
        />
      </>
    );
  }
}

export default InventoryPage;
