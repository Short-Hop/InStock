<<<<<<< HEAD
import React from "react";
import Nav from "./Nav";
import Header from "./Header";
import Inventory from "./Inventory";
import CreateProduct from "./CreateProduct";
import CreateWarehouse from "./CreateWarehouse";

import axios from "axios";

class InventoryPage extends React.Component {
    render() {
        return (
            <>
                <Nav page={this.props.match.path}/>
                <Header title="Inventory" />
                <Inventory warehouseArray={this.props.warehouseArray} deleteProduct={this.props.deleteProduct} />} />
                <CreateProduct/>
            </>
        )

    }

}

export default InventoryPage;
=======
import React from 'react';
import Nav from "./Nav"
import Header from "./Header";
import Inventory from "./Inventory";
import CreateProduct from './CreateProduct';
import axios from "axios";

class InventoryPage extends React.Component {
    
    render() {
        return (
            <>
                <Nav page={this.props.match.path}/>
                <Header title="Inventory" />
                <Inventory warehouseArray={this.props.warehouseArray}/>
                <CreateProduct/>
            </>
        )

    }
}

export default InventoryPage;
>>>>>>> parent of adefd7c8d... Merge pull request #36 from Short-Hop/POST-new-warehouse
