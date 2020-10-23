import React, {Component, useContext, useEffect, useState} from 'react'
import {DataContext} from "../../../Contexts/Context";
import {Product as PRODUCT} from "../../../Interface/Interface";
import Product from './Product'
import Slider from "./Slider";
import '../../css/Main.css'
interface KeyboardEvent {
    code: string;
}



function Home() {
    const context = useContext(DataContext);
    const {products} = context;
    const [result, setResult] = useState(context.products);
    const [input, setInput] = useState<string>('');
    const handleClick = (e: React.KeyboardEvent) => {
        console.log(result)
        if(e.key === 'Enter') {
            if(input.length === 0) {
                setResult([]);
            } else {
                var data: PRODUCT[] = []
                const check = new Map();
                for (let i = 0; i < products.length; i++) {
                    const mn = Math.min(input.length, products[i].category.length)
                    if (products[i].title.toLowerCase().slice(0, mn) === input.toLowerCase().slice(0, mn)) {
                        data.push(products[i]);
                        check.set(products[i]._id, true);
                    }
                }
                for (let i = 0; i < products.length; i++) {
                    const mn = Math.min(input.length, products[i].category.length)
                    if (check.has(products[i].id) === false && input.toLowerCase().slice(0, mn) === products[i].category.toLowerCase().slice(0, mn)) {
                        data.push(products[i]);
                        check.set(products[i]._id, true);
                    }
                }
                setResult(data);
                setInput('');
            }
        }
    }
    return (
        <div className={"Home"}>
            <div className={"Slider"}>
                <Slider/>
            </div>
            <div className={"Search"}>
                <input onChange={event => setInput(event.target.value)} onKeyPress={(event) => handleClick(event)} className="form-control form-control-lg" type="text" placeholder="Search"/>
            </div>
            <div className={"items"}>
                { (result === null || result.length === 0) ?  <div className={"dontfind"}>We don't find product or category</div> :
                    <div id="product">
                        {
                            result.map((product: PRODUCT) => (
                                <Product product={product} key={product._id}> </Product>
                            ))
                        }
                    </div>
                }
            </div>
        </div>
    )

}
export default Home;
