import React, {useContext} from 'react';
import {Route} from "react-router-dom";
import Home from "./Section/Home/Home";
import Basket from "./Section/Basket/Basket";
import Login from "./Section/Authorization/Login";
import Registration from "./Section/Authorization/Registration";
import Details from "./Section/Details/Details"
import Product from "./Section/Home/Product"
import About from "./Section/About/About";
import Favorite from "./Section/Favorite/Favorite";
import Contacts from './Section/Contacts/Contacts';
import Profile from './Section/Profile/Profile';
import {ThemeContext} from "../Contexts/ThemeContext";
import './css/Section.css'
function Section() {
    const themeContext = useContext(ThemeContext);
    return(
        <section style={themeContext.isLightTheme ? themeContext.section_light : themeContext.section_dark}>
            <Route path="/" component={Home} exact />
            <Route path="/product" component={Product} exact />
            <Route path="/product/:id" component={Details} />
            <Route path="/basket" component={Basket} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/favorite" component={Favorite} />
            <Route path="/registration" component={Registration} />
            <Route path="/contact" component={Contacts} />
            <Route path="/profile" component={Profile}/>
        </section>
    )
}
export default Section;
