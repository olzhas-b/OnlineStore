import React, {useContext, useEffect} from "react";
import {Link} from "react-router-dom";
import {DataContext} from "../../../Contexts/Context";
import {ThemeContext} from "../../../Contexts/ThemeContext";
import style from '../../css/Basket.module.css'
import {currencyContext} from "../../../Contexts/CurrencyContext";
function Item({...props}) {
    const themeContext = useContext(ThemeContext);
    const curContext = useContext(currencyContext);
    const {reduction, removeProduct, increase, getTotal} = useContext(DataContext);
    useEffect(() => {
        getTotal();
    }, [props.item.count]);
    return (
        <div className={style.space}>
            <div className={  `${style.details} ${style.basket}`} key={props.item._id} style={themeContext.isLightTheme ? themeContext.item_light : themeContext.item_dark}>
                <Link to={`/product/${props.item._id}`}>
                    <div className="container" >
                        <img src={props.item.src}/>
                        <div className={style.text_block} style={{background: props.item.color}}>
                            {props.item.banner}
                        </div>
                    </div>
                </Link>
                <div className={style.box}>
                    <div className={style.row}>
                        <Link to={`/product/${props.item._id}`}><h2>{props.item.title}</h2></Link>
                        <span>{!curContext.isUSD ? curContext.tg.symbol : curContext.usd.symbol}{!curContext.isUSD ? props.item.price * 420 * props.item.count: props.item.price * props.item.count}</span>
                    </div>
                    <p>{props.item.description}</p>
                    <p>{props.item.content}</p>
                    <div className={style.amount}>
                        <button className={style.count} onClick={() => reduction(props.item._id)}> - </button>
                        <span>{props.item.count}</span>
                        <button className={style.count} onClick={() => increase(props.item._id)}> + </button>
                    </div>
                </div>
                <div className={style.delete} onClick={() => removeProduct(props.item._id)}>x</div>
            </div>
        </div>
    );
}
export default Item;
