import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import '../../css/Product.css'
import {DataContext} from "../../../Contexts/Context";
import {currencyContext} from "../../../Contexts/CurrencyContext";

function Product({...props}) {
    const context = useContext(DataContext);
    const curContext = useContext(currencyContext);
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
                <span>{!curContext.isUSD ? '₸': ' $'}{!curContext.isUSD ? props.product.price * 420: props.product.price}</span>
                <p>{props.product.description}</p>
                <button className={"btn btn-success"} onClick={() => context.addBasket(props.product._id)}>Add to cart</button>
                <button className={"btn btn-warning"} onClick={() => context.addFavorite(props.product._id)}>favorite</button>
            </div>
        </div>
    )
}
export default Product;
