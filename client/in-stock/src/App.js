import React from "react";
import Nav from "./components/Nav";
import InvHeader from "./components/InvHeader";
import LocHeader from "./components/LocHeader";
import "./App.css";
import "./styles/styles.css";
import CreateProduct from "./CreateProduct";
import Inventory from "./components/Inventory";
import Location from "./components/Location";
import WarehouseName from "./components/WarehouseName";


class App extends React.Component {
  render() {
    return (
      <>
        <Nav />
        {/* <InvHeader />
        <Inventory/> */}
        <WarehouseName />
        {/* <LocHeader /> */}
        <CreateProduct />

        <Inventory />
        <Location />
      </>
    );
  }
}

export default App;
