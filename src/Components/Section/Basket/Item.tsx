import React, {useContext, useEffect, useState} from "react";
import '../../css/Basket.css'
import {Link} from "react-router-dom";
import {DataContext} from "../../../Contexts/Context";
function Item({...props}) {
    const {reduction, removeProduct, increase, getTotal, basket} = useContext(DataContext);
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        getTotal();
    }, [props.item.count]);
    return (
        <div className={"main"}>
        <div className="details basket" key={props.item._id}>
            <Link to={`/product/${props.item._id}`}>

                <div className="container">
                    <img src={props.item.src}/>
                    <div className="text-block">
                        рассрочка
                    </div>
                </div>

            </Link>
            <div className="box">
                <div className="row">
                    <Link to={`/product/${props.item._id}`}><h2>{props.item.title}</h2></Link>
                    <span>${props.item.price * props.item.count}</span>
                </div>
                <p>{props.item.description}</p>
                <p>{props.item.content}</p>
                <div className="amount">
                    <button className="count" onClick={() => reduction(props.item._id)}> - </button>
                    <span>{props.item.count}</span>
                    <button className="count" onClick={() => increase(props.item._id)}> + </button>
                </div>
            </div>
            <div className={"delete"} onClick={() => removeProduct(props.item._id)}>x</div>
        </div>
        </div>
    );
}
export default Item;
