import React from "react";
<<<<<<< HEAD
import Nav from "../src/components/Nav";
import InvHeader from "../src/components/InvHeader";
import LocHeader from "../src/components/LocHeader";
=======
import Nav from "./components/Nav";
import Header from "./components/Header";
>>>>>>> 9a45135666fce254a5d05d148aee8d99dfb498db
import "./App.css";
import "./styles/styles.css";
import CreateProduct from "./components/CreateProduct";
import CreateWarehouse from "./components/CreateWarehouse";
import Product from "./components/Product";
import Inventory from "./components/Inventory";
import Location from "./components/Location";
import WarehouseName from "./components/WarehouseName";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LocationPage from "./components/LocationPage";
import InventoryPage from "./components/InventoryPage";

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
        <Nav />
          <Switch>
            <Redirect from="/" exact to="/warehouses"></Redirect>
            <Route path="/warehouses" exact component={LocationPage}></Route>
            <Route path="/inventory" exact component={InventoryPage}></Route>
            <Route path="/inventory/:id" component={Product}></Route>
            <Route path="/warehouses/:id" component={WarehouseName}></Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
