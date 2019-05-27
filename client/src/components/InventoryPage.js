import React from 'react';
import Nav from "./Nav"
import Header from "./Header";
import Inventory from "./Inventory";
import CreateProduct from './CreateProduct';

class InventoryPage extends React.Component {
    render() {
        return (
            <>
                <Nav page={this.props.match.path}/>
                <Header title="Inventory" />
                <Inventory/>
                <CreateProduct/>
            </>
        )

    }
}

export default InventoryPage;