import React, {lazy, useContext, useEffect, useMemo, useState} from 'react'
import {DataContext} from '../../../Contexts/Context'
import {Link} from 'react-router-dom'
import {Basket as BASKET, Product} from "../../../Interface/Interface";
import style from '../../css/Basket.module.css'
import {currencyContext} from "../../../Contexts/CurrencyContext";
const Item = lazy(() => import('./Item'));
function Basket() {
    const context = useContext(DataContext);
    const curContext = useContext(currencyContext);
    const {basket} = context;
    function computeTotal() {
        var val = 0;
        context.basket.forEach((x: BASKET) => val += x.price * x.count);
        return val;
    }
    const total = useMemo(() => computeTotal(), [context]);
    if(basket.length === 0){
        return <h2 style={{textAlign:"center"}}>Your Basket is empty </h2>
    }else{
        return (
            <div className={"color-background"}>
                <div className={"space"}>
                    {
                        basket.map( (item: Product) =>(
                            <Item item={item}/>
                        ))
                    }
                </div>
                <div className={style.total}>
                    <h3>Total: {!curContext.isUSD ? curContext.tg.symbol : curContext.usd.symbol}{!curContext.isUSD ? total * 420 : total}</h3>
                    <Link to="/payment" className={"btn btn-danger"}>Payment</Link>
                </div>
            </div>

        )
    }

}

export default Basket
