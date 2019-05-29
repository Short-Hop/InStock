import React from 'react';
import arrow from "../assets/Icons/SVG/Icon-back-arrow.svg"
import { Link } from "react-router-dom";
import Nav from "./Nav"
import axios from 'axios';
import Switch from "react-switch";
import { Redirect } from "react-router-dom";

class Product extends React.Component {
    state = {
        product: {
            id: "",
            name: "",
            shortDescription: "",
            longDescription: "",
            refNumber: "",
            location: {
                city: "",
                country: ""
            },
            orderDate: "",
            orderBy: "",
            quantity: 0,
            categories: [],
            inStock: false
        },

        redirect: false
    }

    

    componentDidMount() {
        axios.get('http://localhost:8080/api/warehouses/' + this.props.match.params.warehouseId + "/product/" + this.props.match.params.id).then(response => {
            this.setState({
                product: response.data
            })
        })
    }

    printCategories = () => {
        let string = "";
        this.state.product.categories.forEach(category => {
            string += category + ", "
        })
        string = string.substr(0, (string.length - 2))
        return string;
    }

    formUpdate = (value, name) => {

        let updatedProduct = this.state.product;
        if (name === 'description') {
            updatedProduct.longDescription = value;
        } else if (name === 'orderBy') {
            updatedProduct.orderBy = value;
        } else if (name === 'refNumber') {
            updatedProduct.refNumber = value;
        } else if (name === 'orderDate') {
            updatedProduct.orderDate = value;
        } else if (name === 'location') {
            updatedProduct.location = JSON.parse(value);
        } else if (name === 'quantity') {
            updatedProduct.quantity = value;
        }  else if (name === 'categories') {
            updatedProduct.categories = value.split(", ")
        }  else if (value) {
            updatedProduct.inStock = value;
        } else {
            updatedProduct.inStock = false;
        }

        this.setState({
            product: updatedProduct
        })
    }

    submitForm = (event) => {
        event.preventDefault();
        this.props.editProduct(this.state.product)

        setTimeout(() => {
            this.setState({
                redirect: true
            })
        }, 1000)
    }

    render() {
        if (this.state.redirect) {
            return <Redirect push to={"/warehouse/" + this.state.product.warehouseId + "/inventory/" + this.state.product.id} />
        }


        if (this.refs.description) {
            console.log(this.refs.description.innerHTML);
        }
        
        let indicator;
        if (this.state.product.inStock) {
            indicator = 'In Stock'
        } else {
            indicator = 'Out of Stock'
        }



        return (
            <>
                <Nav page={this.props.match.path} />
                <div className="productEdit">
                    <div className="productEdit__header">
                        <div>
                            <Link to="/inventory">
                                <img src={arrow} alt='arrow' />
                            </Link>

                            <h1>{this.state.product.name}</h1>
                        </div>
                    </div>
                    <div className="divider"></div>

                        <form id="editProduct" className="productEdit__details" onSubmit={this.submitForm}>
                            <div className="productEdit__description">
                                <h5>ITEM DESCRIPTION</h5>
                                <textarea name="description" value={this.state.product.longDescription} onChange={event => this.formUpdate(event.target.value, event.target.name)} ></textarea>
                            </div>
                            <div className="productEdit__info">
                                <div>
                                    <div>
                                        <h5>ORDERED BY</h5>
                                        <input name="orderBy" value={this.state.product.orderBy} onChange={event => this.formUpdate(event.target.value, event.target.name)} ></input>
                                    </div>
                                    <div>
                                        <h5>REFERENCE NUMBER</h5>
                                        <input name="refNumber" value={this.state.product.refNumber} onChange={event => this.formUpdate(event.target.value, event.target.name)}></input>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        <h5>LAST ORDERED</h5>
                                        <input name="orderDate" value={this.state.product.orderDate} onChange={event => this.formUpdate(event.target.value, event.target.name)} ></input>
                                    </div>
                                    <div>
                                        <h5>LOCATION</h5>
                                        <select name="location" onChange={event => this.formUpdate(event.target.value, event.target.name)}>
                                            <option value={JSON.stringify({ city: "Toronto", country: "CAN" })}>Toronto, CAN</option>
                                            <option value={JSON.stringify({ city: "Vancouver", country: "CAN" })}>Vancouver, CAN</option>
                                            <option value={JSON.stringify({ city: "Paris", country: "FRA" })}>Paris, FRA</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        <h5>QUANTITY</h5>
                                        <input name="quantity" value={this.state.product.quantity} onChange={event => this.formUpdate(event.target.value, event.target.name)}></input>
                                    </div>

                                    <div>
                                        <h5>STATUS</h5>
                                        <div className="productEdit__switch--container">
                                            <h4>{indicator}</h4>
                                        <Switch name="inStock" onChange={event => this.formUpdate(event)} checked={this.state.product.inStock} onColor="#6BB01A" checkedIcon={false} uncheckedIcon={false} />
                                        </div>
                                    </div>

                                </div>
                                <div>
                                    <section>
                                        <h5>CATEGORIES</h5>
                                    <textarea className="productEdit__categories" name="categories" value={this.printCategories()} onChange={event => this.formUpdate(event.target.value, event.target.name)}></textarea>
                                    </section>
                                </div>
                            </div>

                        </form>

                    <div className="divider"></div>

                    <div className="productEdit__button--container">
                        
                        <button form="editProduct" type="submit">
                            SAVE
                        </button>
                        
                        <Link to={"/warehouse/" + this.state.product.warehouseId + "/inventory/" + this.state.product.id}>
                        <button className="cancel">
                            CANCEL
                        </button>
                        </Link>
                    </div>
                </div>
            </>
        )
    }

}


export default Product;