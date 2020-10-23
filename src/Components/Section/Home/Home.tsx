import React, {Component, useContext} from 'react'
import {DataContext} from "../../../Contexts/Context";
import {Product as PRODUCT} from "../../../Interface/Interface";
import Product from './Product'
import Slider from "./Slider";
import '../../css/Main.css'
function Home() {
    const context = useContext(DataContext);
    const {products} = context;
    return (
        <div className={"Home"}>
            <div className={"Slider"}>
                <Slider/>
            </div>
            <div className={"Search"}>
                <input className="form-control form-control-lg" type="text" placeholder="Search"/>
            </div>
            <div id="product">
                {
                    products.map((product: PRODUCT) =>(
                        <Product product={product} key={product._id}> </Product>
                    ))
                }
            </div>
        </div>
    )

}
export default Home;
