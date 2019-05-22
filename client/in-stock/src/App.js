import React from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import "./App.css";
import "./styles/styles.css";
import CreateProduct from "./CreateProduct";
import Product from "./components/Product"
import Inventory from "./components/Inventory";
import Location from "./components/Location";
import WarehouseName from "./components/WarehouseName";

class App extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <Product/>
        <Header title="Inventory" />
        <Inventory/>
        {/* <InvHeader />
        <Inventory/> */}
        <WarehouseName />
        {/* <LocHeader /> */}
        <CreateProduct />
        <Location />
      </>
    );
  }
}

export default App;
