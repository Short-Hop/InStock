import React from 'react'; 
import arrow from "../assets/Icons/SVG/Icon-back-arrow.svg"
import { Link } from "react-router-dom";

function Product() {
    let instock = true;
    let indicator;
    
    if (instock) {
        indicator = <div className="product__inStock">In Stock</div>
    } else {
        indicator = <div className="product__outStock">Out of Stock</div>
    }


    return(
        <div className="product">
            <div className="product__header">
                <div>
                    <Link to="/inventory">
                        <img src={arrow}/>
                    </Link>
                    
                    <h1>Product Name</h1>
                </div>
                {indicator}
            </div>
            <div className="divider"></div>

            <div className="product__details">
                <div className="product__description">
                    <h5>ITEM DESCRIPTION</h5>
                    <h4>Here is a more detailed summary of the product name, it’s uses, industries and possible attributes that could be used to describe the product.</h4>
                </div>
                <div className="product__info"> 
                    <div>
                        <div>
                            <h5>ORDERED BY</h5>
                            <h4>Mark Saunders</h4>
                        </div>
                        <div>
                            <h5>REFERENCE NUMBER</h5>
                            <h4>JK2020FD7811201</h4> 
                        </div>
                    </div>

                    <div>
                        <div>
                            <h5>LAST ORDERED</h5>
                            <h4>2018-05-24</h4>
                        </div>
                        <div>
                            <h5>LOCATION</h5>
                            <h4>Toronto, CAN</h4>
                        </div>
                    </div>

                    <div>
                        <div>
                            <h5>QUANTITY</h5>
                            <h4>12000</h4>
                        </div>
                    </div>
                    

                    <div>
                        <div>
                            <h5>CATEGORIES</h5>
                            <h4>Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation, Sales</h4>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="divider"></div>
            
            <button>
                EDIT
            </button>
            
        </div>
    )
}



export default Product;