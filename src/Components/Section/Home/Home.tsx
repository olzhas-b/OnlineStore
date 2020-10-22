import React, {Component} from 'react'
import {DataContext} from "../../../Contexts/Context";
import {Product as PRODUCT} from "../../../Interface/Interface";
import Product from './Product'

export class Home extends Component {
    static contextType = DataContext;
    render() {
        const {products} = this.context;
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
