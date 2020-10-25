import React from 'react';
import {DataContext} from "../../../Contexts/Context";
import {Product as PRODUCT} from "../../../Interface/Interface";
import Product from './Product'
import Slider from "./Slider";
import '../../css/Main.css'
import {useContext, useRef, useState} from "react";
import {ThemeContext} from "../../../Contexts/ThemeContext";



function Home() {
    const themeContext =useContext(ThemeContext);
    const context = useContext(DataContext);
    const ref = useRef<HTMLInputElement>(null);
    const {products} = context;
    const [output, setOutput] = useState(context.products);
    const [input, setInput] = useState<string>('');
    const handlePressKey = (e: React.KeyboardEvent) => {
        console.log(output);
        if(e.key === 'Enter') {
            if(ref.current!.value === '') {
                setOutput(products)
            }
            else if(input.length === 0) {
                setOutput([]);
            } else {
                let data: PRODUCT[] = [];
                const check = new Map();
                for (let i = 0; i < products.length; i++) {
                    const str1 = products[i].title.toLowerCase();
                    const str2 = ref.current!.value.toLowerCase();
                    const mn = Math.min(str1.length, str2.length);
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
                setOutput(data);
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
                <input ref={ref} onChange={event => setInput(event.target.value)} onKeyPress={(event) => handlePressKey(event)} className="form-control form-control-lg" type="text" placeholder="Search" style={themeContext.isLightTheme ? themeContext.item_light : themeContext.item_dark}/>
            </div>
            <div className={"items"}>
                { (output === null || output.length === 0) ?  <div className={"dontfind"}>We don't find product or category</div> :
                    <div id="product">
                        {
                            output.map((product: PRODUCT) => (
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
