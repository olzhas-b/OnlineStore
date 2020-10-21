import React from 'react';
import {Route} from "react-router-dom";
import Home from "./Section/Home/Home";
import Basket from "./Section/Basket/Basket";
import Login from "./Section/Authorization/Login";
import Registration from "./Section/Authorization/Registration";
import Details from "./Section/Details/Details"
function Section() {
    return(
        <section>
            <Route path="/" component={Home} />
            <Route path="/product" component={Home} />
            <Route path="/product/:id" component={Details} />
            <Route path="/basket" component={Basket} />
            <Route path="/login" component={Login} />
            <Route path="/registration" component={Registration} />
        </section>
    )
}
export default Section;
