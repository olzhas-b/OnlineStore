import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import style from '../../css/Product.module.css'
import {DataContext} from "../../../Contexts/Context";
import {currencyContext} from "../../../Contexts/CurrencyContext";
import {ThemeContext} from "../../../Contexts/ThemeContext";

function Product({...props}) {
    const context = useContext(DataContext);
    const curContext = useContext(currencyContext);
    const themeContext = useContext(ThemeContext);
    if (props.product.src === '' || props.product.description === '' || props.product.title === '') {
        throw new Error('Data is unavailable');
    }
    return (
        <div className={style.card} key={props.product._id} style={themeContext.isLightTheme ? themeContext.item_light : themeContext.item_dark}>
            <Link to={`/product/${props.product._id}`}>
                <div className={style.container}>
                    <img src={props.product.src}/>
                    <div className={style.text_block} style={{background: props.product.color}}>
                        {props.product.banner}
                    </div>
                </div>
            </Link>
            <div className={style.containerDes}>
                <h3>
                    <Link to={`/product/${props.product._id}`} style={{color: themeContext.isLightTheme ? themeContext.item_light.color : themeContext.item_dark.color}}>{props.product.title}</Link>
                </h3>
                <span>{!curContext.isUSD ? curContext.tg.symbol : curContext.usd.symbol}{!curContext.isUSD ? props.product.price * 420: props.product.price}</span>
                <p >{props.product.description}</p>
                <button className={"btn btn-success"} onClick={() => context.addBasket(props.product._id)}>Add to basket</button>
                <button className={"btn btn-warning"} onClick={() => context.addFavorite(props.product._id)}>Favorite</button>
            </div>
        </div>
    )
}
export default Product;
