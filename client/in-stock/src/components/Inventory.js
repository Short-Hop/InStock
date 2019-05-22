import React from 'react';
import InventoryItem from "./InventoryItem"

class Inventory extends React.Component {
    render() {
        return (
            <div className="inventory">
                <table >
                    <tbody>
                        <tr>
                            <th>ITEM</th>
                            <th>LAST ORDERED</th>
                            <th>LOCATION</th>
                            <th>QUANTITY</th>
                            <th>STATUS</th>
                        </tr>
                    <InventoryItem></InventoryItem>
                    <InventoryItem></InventoryItem>
                    <InventoryItem></InventoryItem>
                    </tbody>
                </table>
            </div>
        )
        
    }
}

export default Inventory;