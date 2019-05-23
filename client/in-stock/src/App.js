import React from "react";
import Nav from "../src/components/Nav";
import InvHeader from "../src/components/InvHeader";
import LocHeader from "../src/components/LocHeader";
import "./App.css";
import "./styles/styles.css";
import CreateProduct from "./CreateProduct";
import Inventory from "./components/Inventory";
import Location from "./components/Location";

class App extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <InvHeader />
        <LocHeader />
        <CreateProduct />
        <Inventory />
        <Location />
      </>
    );
  }
}

export default App;
