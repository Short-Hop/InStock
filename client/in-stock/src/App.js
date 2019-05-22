import React from "react";
import Nav from "./components/Nav";
import InvHeader from "./components/InvHeader";
import LocHeader from "./components/LocHeader";
import "./App.css";
import "./styles/styles.css";
import CreateProduct from "./CreateProduct";
import Inventory from "./components/Inventory"
import Product from "./components/Product"


class App extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <Product/>
        <InvHeader />
        <Inventory/>
        <LocHeader />
        <CreateProduct />
        
      </>
    );
  }
}

export default App;
