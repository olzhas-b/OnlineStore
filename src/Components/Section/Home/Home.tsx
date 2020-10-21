import React, {Component, useContext} from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from "../../../Data/Context";
import {Data, Product as PRODUCT} from "../../../Interface/Interface";
import Product from '../Product/Product'
export class Home extends Component {
    static contextType = DataContext;
    render() {
        const {products, addBasket} = this.context;
        return (
            <div id="product">
                {
                    products.map((product: PRODUCT) =>(
                        <Product product={product}> </Product>
                        ))
                }
            </div>
        )
    }
}
export default Home;
