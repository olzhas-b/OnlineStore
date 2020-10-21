import React, {Component, useContext} from 'react'
import {Link} from 'react-router-dom'
import '../../css/Product.css'
import {DataContext} from "../../../Data/Context";
function Product({...props}) {
    console.log(props)
    const context = useContext(DataContext);
    return (
        <div className="card" key={props.product._id}>
            <Link to={`/product/${props.product._id}`}>
                <img src={props.product.src} alt=""/>
            </Link>
            <div className="content">
                <h3>
                    <Link to={`/product/${props.product._id}`}>{props.product.title}</Link>
                </h3>
                <span>${props.product.price}</span>
                <p>{props.product.description}</p>
                <button className={"btn btn-success"} onClick={() => context.addBasket(props.product._id)}>Add to cart</button>
                <button className={"btn btn-warning"}>favorite</button>
            </div>
        </div>
    )
}
export default Product;
