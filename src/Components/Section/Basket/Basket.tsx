import React, { Component } from 'react'
import {DataContext} from '../../../Contexts/Context'
import {Link} from 'react-router-dom'
import {Product} from "../../../Interface/Interface";
import '../../css/Basket.css'

export class Basket extends Component {
    static contextType = DataContext;

    componentDidMount(){
        this.context.getTotal();
    }

    render() {
        const {basket,increase,reduction,removeProduct,total} = this.context;
        if(basket.length === 0){
            return <h2 style={{textAlign:"center"}}>Your Basket is empty </h2>
        }else{
            return (
                <>
                    {
                        basket.map( (item: Product) =>(
                            <div className="details basket" key={item._id}>
                                <Link to={`/product/${item._id}`}><img src={item.src}/></Link>
                                <div className="box">
                                    <div className="row">
                                        <Link to={`/product/${item._id}`}><h2>{item.title}</h2></Link>
                                        <span>${item.price * item.count}</span>
                                    </div>
                                    <p>{item.description}</p>
                                    <p>{item.content}</p>
                                    <div className="amount">
                                        <button className="count" onClick={() => reduction(item._id)}> - </button>
                                        <span>{item.count}</span>
                                        <button className="count" onClick={() => increase(item._id)}> + </button>
                                    </div>
                                </div>
                                <div className={"delete"} onClick={() => removeProduct(item._id)}>x</div>
                            </div>
                        ))
                    }
                    <div className="total">

                        <h3>Total: ${total}</h3>
                        <Link to="/payment" className={"btn btn-danger"}>Payment</Link>
                    </div>
                </>
            )
        }
    }
}

export default Basket
