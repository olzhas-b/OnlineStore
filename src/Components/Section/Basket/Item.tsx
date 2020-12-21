import React, {useContext, useEffect} from "react";
import {Link} from "react-router-dom";
import {DataContext} from "../../../Contexts/Context";
import {ThemeContext} from "../../../Contexts/ThemeContext";
import '../../css/Basket.css'
function Item({...props}) {
    const themeContext = useContext(ThemeContext);
    const {reduction, removeProduct, increase, getTotal} = useContext(DataContext);
    useEffect(() => {
        getTotal();
    }, [props.item.count]);
    return (
        <div className={"main"}>
            <div className="details basket" key={props.item._id} style={themeContext.isLightTheme ? themeContext.item_light : themeContext.item_dark}>
                <Link to={`/product/${props.item._id}`}>
                    <div className="container" >
                        <img src={props.item.src}/>
                        <div className="text-block" style={{background: props.item.color}}>
                            {props.item.banner}
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
