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
                <Inventory deleteProduct={this.props.deleteProduct} productArray={this.props.productArray} />
                <CreateProduct/>
            </>
        )

    }

}

export default InventoryPage;
