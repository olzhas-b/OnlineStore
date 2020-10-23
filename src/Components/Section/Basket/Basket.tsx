import React, {useContext, useEffect} from 'react'
import {DataContext} from '../../../Contexts/Context'
import {Link} from 'react-router-dom'
import {Product} from "../../../Interface/Interface";
import Item from "./Item";

function Basket() {
    const context = useContext(DataContext);
    const {basket,increase,reduction,removeProduct,total, getTotal} = context;
    useEffect(() => {
        getTotal();
        console.log("it is effect")
    }, [basket]);
    console.log(basket)
    if(basket.length === 0){
        return <h2 style={{textAlign:"center"}}>Your Basket is empty </h2>
    }else{
        return (

            <div className={"top"}>
                {
                    basket.map( (item: Product) =>(<Item item={item}/>))
                }
                <div className="total">
                    <h3>Total: ${total}</h3>
                    <Link to="/payment" className={"btn btn-danger"}>Payment</Link>
                </div>
            </div>

        )
    }

}

export default Basket
