import React from "react";
import Nav from "../src/component/Nav";
import InvHeader from "../src/component/InvHeader";
// import LocHeader from "../src/component/LocHeader";
import "../src/styles/styles.css";
import "./App.css";
import "./styles/styles.css";
import CreateProduct from "./CreateProduct";
import Inventory from "./components/Inventory"


class App extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <InvHeader />
        <LocHeader />
        <CreateProduct />
        <Inventory/>
      </>
    );
  }
}

export default App;
