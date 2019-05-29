import React from "react";
import "./styles/styles.css";
import Product from "./components/Product";
import ProductEdit from "./components/ProductEdit";
import WarehouseName from "./components/WarehouseName";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LocationPage from "./components/LocationPage";
import InventoryPage from "./components/InventoryPage";
import axios from "axios";

class App extends React.Component {
  state = {
    warehouseArray: [],
    allProducts: []
  };

  componentDidMount() {
    axios.get("http://localhost:8080/api/warehouses").then(response => {
      this.setState({
        warehouseArray: response.data,
      });
    });

    axios.get("http://localhost:8080/api/inventories").then(response => {
      console.log(response.data)
      this.setState({
        allProducts: response.data
      })
    })
  }

  deleteProduct = (warehouseId, productId) => {
    axios
      .delete(
        "http://localhost:8080/api/warehouses/" +
          warehouseId +
          "/product/" +
          productId
      )
      .then(response => {
        this.setState({
          warehouseArray: response.data,
        });

        axios.get("http://localhost:8080/api/inventories").then(response => {
          console.log(response.data)
          this.setState({
            allProducts: response.data
          })
        })
      });
  };

  editProduct = (product) => {
    axios.put('http://localhost:8080/api/inventories/' + product.warehouseId + "/" + product.id, product).then(response => {
      this.setState({
        warehouseArray: response.data,
      })

      axios.get("http://localhost:8080/api/inventories").then(response => {
        console.log(response.data)
        this.setState({
          allProducts: response.data
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
              path="/warehouses/:id"
              exact
              render={({ match }) => (
                <WarehouseName
                  warehouseArray={this.state.warehouseArray}
                  warehouseId={match.params.id}
                  match={match}
                />
              )}
            />
            />
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
                  productArray={this.state.allProducts}
                  deleteProduct={this.deleteProduct}
                  match={match}
                />
              )}
            />
            <Route
              path="/warehouse/:warehouseId/inventory/:id"
              exact
              render={({ match }) => (
                <Product
                  warehouseArray={this.state.warehouseArray}
                  match={match}
                />
              )}
            />
            <Route
              path="/warehouse/:warehouseId/inventory/:id/edit"
              render={({ match }) => (
                <ProductEdit
                  warehouseArray={this.state.warehouseArray}
                  match={match} editProduct={this.editProduct}
                />
              )}
            />
            <Route
              path="/warehouse/:id"
              exact
              render={({ match }) => (
                <WarehouseName
                  warehouseArray={this.state.warehouseArray}
                  match={match}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
