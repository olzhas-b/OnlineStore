import React, {useContext, useEffect, useState} from "react";
import style from '../../css/Basket.module.css'
import {Link} from "react-router-dom";
import {DataContext} from "../../../Contexts/Context";
import {ThemeContext} from "../../../Contexts/ThemeContext";
function Item({...props}) {
    const themeContext = useContext(ThemeContext);
    const {removeFavorite, getTotal} = useContext(DataContext);
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
                        <span>${props.item.price * props.item.count}</span>
                    </div>
                    <p>{props.item.description}</p>
                    <p>{props.item.content}</p>
                </div>
                <div className={style.delete} onClick={() => removeFavorite(props.item._id)}>x</div>
            </div>
        </div>
    );
}
export default Item;
