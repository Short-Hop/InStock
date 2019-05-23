import React from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import "./App.css";
import "./styles/styles.css";
import CreateProduct from "./components/CreateProduct";
import CreateWarehouse from "./components/CreateWarehouse";
import Product from "./components/Product";
import Inventory from "./components/Inventory";
// import Location from "./components/Location";

class App extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <Product />
        <Header title="Inventory" />
        <Inventory />

        {/* <InvHeader />
        <Inventory/> */}
        {/* <WarehouseName /> */}
        {/* <LocHeader /> */}
        <CreateProduct />
        <CreateWarehouse />
        {/* <Location /> */}
      </>
    );
  }
}

export default App;
