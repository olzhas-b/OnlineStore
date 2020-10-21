import React from 'react';
import {Route} from "react-router-dom";
import Home from "./Section/Home/Home";
import Basket from "./Section/Basket/Basket";
import Login from "./Section/Authorization/Login";
import Registration from "./Section/Authorization/Registration";
import Details from "./Section/Details/Details"
import Product from "./Section/Product/Product"
import About from "./Section/About/About";
import Favorite from "./Section/Favorite/Favorite";
function Section() {
    return(
        <section>
            <Route path="/" component={Home} exact />
            <Route path="/product" component={Product} exact />
            <Route path="/product/:id" component={Details} />
            <Route path="/basket" component={Basket} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/favorite" component={Favorite} />
            <Route path="/registration" component={Registration} />
        </section>
    )
}
export default Section;
