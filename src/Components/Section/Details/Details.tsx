import React, {useContext, useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'
import {DataContext} from "../../../Contexts/Context";
import {Product as PRODUCT} from '../../../Interface/Interface'
import {Comment} from '../CommentForm/Comment'
import {detail} from '../../../Data/initialDATA'
import {likeCountHOC} from './LikeCountHOC'
import LikeArea from './LikeArea'
import {currencyContext} from "../../../Contexts/CurrencyContext";
import style from './Details.module.css';

const Wrapped = likeCountHOC()(LikeArea);

export function Details({...props}) {
    const currContext = useContext(currencyContext);
    const context = useContext(DataContext);
    const location = useLocation();
    const {products} = useContext(DataContext);
    const [output, setOutput] = useState(detail);
    useEffect(() => {
        const id = location.pathname.split('/').pop()
        setOutput({product: products.filter((item : PRODUCT) => (item._id === id))})
    },[])
    return (
        <div className="app">
            {
                output.product.map((item: PRODUCT) => (
                        <div className={style.details} key={item._id}>
                            <div className="big-img item-photo">
                                <img src={item.src}  alt="good"/>
                            </div>
                            <div className={style.box}>
                                <div className={style.row}>
                                    <h2>{item.title}</h2>
                                </div>

                                <h6 className={style.title_price}>CURRENT PRICE:</h6>
                                <span className={"title-price text-info"}>{!currContext.isUSD ? currContext.tg.symbol : currContext.usd.symbol}{!currContext.isUSD ? item.price * 420: item.price}</span>
                                <h6 className={"text-info"}>DESCRIPTION:</h6>
                                <p>{item.description}</p>
                                <p>{item.content}</p>
                                <div>
                                    <Wrapped />
                                </div>
                                <button className="btn btn-success" onClick={() => context.addBasket(item._id)}>Add to basket</button>
                                <button className={"btn btn-warning"} onClick={() => context.addFavorite(item._id)}>Favorite</button>
                            </div>
                        </div>
                ))
            }

            <Comment />

        </div>
    )
}

export default Details

