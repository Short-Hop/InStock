import React from 'react';
import kebab from "../assets/Icons/SVG/Icon-kebab-default.svg"

function InventoryItem() {
    return (
        <>
        <tr>
            <td className="inventory__mobile--kebab">
                <button>
                    <img src={kebab} alt={'more'}/>
                </button>
            </td>
            <td className="inventory__mobile--label">ITEM</td>
            <td className="inventory__item">
                <h3>Product Name Here</h3>
                <h4>Here is a very brief description of the product in the inventory…</h4>
            </td>
            <td className="inventory__mobile--label">LAST ORDERED</td>
            <td className="inventory__date">
                <h4>05/24/2018</h4>
            </td>
            <td className="inventory__mobile--label">LOCATION</td>
            <td className="inventory__location">
                <h4>Toronto, CAN</h4>
            </td>
            <td className="inventory__mobile--label">QUANTITY</td>
            <td className="inventory__quantity">
                <h4>12,000</h4>
            </td>
            <td className="inventory__mobile--label">STATUS</td>
            <td className="inventory__status">
                <h4>In Stock</h4>
                <button className="inventory__kebab">
                    <img src={kebab} alt={'more'}/>
                </button>
            </td>
        </tr>
        
        <tr>
            <td colSpan="6" className="divider"></td>
        </tr>
        </>
    )

}

export default InventoryItem;