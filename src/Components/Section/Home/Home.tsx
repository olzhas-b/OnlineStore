import React from 'react';
import {DataContext} from "../../../Contexts/Context";
import {Product as PRODUCT} from "../../../Interface/Interface";
import Product from './Product'
import Slider from "./Slider";
import '../../css/Main.css'
import {useContext, useRef, useState} from "react";
interface KeyboardEvent {
    code: string;
}



function Home() {
    const context = useContext(DataContext);
    const ref = useRef<HTMLInputElement>(null);
    const {products} = context;
    const [result, setResult] = useState(context.products);
    const [input, setInput] = useState<string>('');
    const handlePressKey = (e: React.KeyboardEvent) => {
        console.log(result)
        if(e.key === 'Enter') {
            if(ref.current!.value === '') {
                setResult(products)
            }
            else if(input.length === 0) {
                setResult([]);
            } else {
                var data: PRODUCT[] = []
                const check = new Map();
                for (let i = 0; i < products.length; i++) {
                    const str1 = products[i].title.toLowerCase();
                    const str2 = ref.current!.value.toLowerCase();
                    const mn = Math.min(str1.length, str2.length)
                    if (str1.slice(0, mn) === str2.slice(0, mn)) {
                        data.push(products[i]);
                        check.set(products[i]._id, true);
                    }
                }
                for (let i = 0; i < products.length; i++) {
                    const str1 = products[i].category.toLowerCase();
                    const str2 = ref.current!.value.toLowerCase();
                    const mn = Math.min(str1.length, str2.length)
                    if (!check.has(products[i].id) && str2.slice(0, mn) === str1.toLowerCase().slice(0, mn)) {
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
                <input ref={ref} onChange={event => setInput(event.target.value)} onKeyPress={(event) => handlePressKey(event)} className="form-control form-control-lg" type="text" placeholder="Search"/>
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
