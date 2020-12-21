import React, {lazy, Suspense, useCallback} from 'react';
import {DataContext} from "../../../Contexts/Context";
import {Product as PRODUCT} from "../../../Interface/Interface";
import Slider from "./Slider";
import '../../css/Main.css'
import {useContext, useRef, useState} from "react";
import {ThemeContext} from "../../../Contexts/ThemeContext";
import HomeList from './HomeList';



function Home() {
    const themeContext =useContext(ThemeContext);
    const context = useContext(DataContext);
    const ref = useRef<HTMLInputElement>(null);
    const {products} = context;
    const [input, setInput] = useState<string>('');
    const getItems = useCallback(
        () => {
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
                const mn = Math.min(str1.length, str2.length);
                if (!check.has(products[i].id) && str2.slice(0, mn) === str1.toLowerCase().slice(0, mn)) {
                    data.push(products[i]);
                    check.set(products[i]._id, true);
                }
            }
            return data;
        },
        [input]
      );
    const handlePressKey = (e: React.KeyboardEvent) => {
        if(e.key === 'Enter') {

            if(ref.current!.value === '') {
                setInput('');
            }
            else {
                setInput(ref.current!.value);
                
            }
        }
    }
    return (
        <div className={"Home"}>
            
            <div className={"Slider"}>
                <Slider/>
            </div>
            <div className={"Search"}>
                <input ref={ref} onKeyPress={(event) => handlePressKey(event)} className="form-control form-control-lg" type="text" placeholder="Search" style={themeContext.isLightTheme ? themeContext.item_light : themeContext.item_dark}/>
            </div>
            <HomeList getItems={getItems}/>
        </div>
    )

}
export default Home;
