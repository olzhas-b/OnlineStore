import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import '../../css/Product.css'
import {DataContext} from "../../../Contexts/Context";

function Product({...props}) {
    const context = useContext(DataContext);
    return (
        <div className="card" key={props.product._id}>
            <Link to={`/product/${props.product._id}`}>
                <div className="container">
                    <img src={props.product.src}/>
                    <div className="text-block" style={{background: props.product.color}}>
                        {props.product.banner}
                    </div>
                </div>

            </Link>
            <div className="content">
                <h3>
                    <Link to={`/product/${props.product._id}`}>{props.product.title}</Link>
                </h3>
                <span>${props.product.price}</span>
                <p>{props.product.description}</p>
                <button className={"btn btn-success"} onClick={() => context.addBasket(props.product._id)}>Add to cart</button>
                <button className={"btn btn-warning"} onClick={() => context.addFavorite(props.product._id)}>favorite</button>
            </div>
        </div>
    )
}
export default Product;
