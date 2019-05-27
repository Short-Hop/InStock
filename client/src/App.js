import React from "react";
import Nav from "./components/Nav";
import "./App.css";
import "./styles/styles.css";
import Product from "./components/Product";
import WarehouseName from "./components/WarehouseName";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LocationPage from "./components/LocationPage";
import InventoryPage from "./components/InventoryPage";
import axios from "axios";

class App extends React.Component {
  state = {
    warehouseArray: []
  };

  componentDidMount() {
    axios.get("http://localhost:8080/api/warehouses").then(response => {
      this.setState({
        warehouseArray: response.data
      });

      console.log(this.state);
    });
  }

  deleteProduct = (WAREid) => {
    axios.delete('http://localhost:8080/api/warehouses//product/' + id).then(response => {
      console.log(response);

      axios.get('http://localhost:8080/api/warehouses').then(response => {
        this.setState({
          warehouseArray: response.data
        })

      })
    })
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Redirect from="/" exact to="/warehouses" />
            <Route
              path="/warehouses"
              exact
              render={({ match }) => (
                <LocationPage
                  warehouseArray={this.state.warehouseArray}
                  match={match}
                />
              )}
            />
            <Route
              path="/inventory"
              exact
              render={({ match }) => (
                <InventoryPage
                  warehouseArray={this.state.warehouseArray}
                  match={match}
                />
              )}
            />
            <Route
              path="/inventory/:id"
              render={({ match }) => (
                <Product
                  warehouseArray={this.state.warehouseArray}
                  match={match}
                />
              )}
            />
            <Route path="/warehouses/:id" component={WarehouseName} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
