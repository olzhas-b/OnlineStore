import React, {useContext, Suspense, lazy} from 'react';
import {Route} from "react-router-dom";
import {ThemeContext} from "../Contexts/ThemeContext";
import './css/Section.module.css'
// import About from "./Section/About/About";
// import Sale from './Section/Sale/Sale'
// import Favorite from "./Section/Favorite/Favorite";
// import Product from "./Section/Home/Product";
const Favorite = lazy(() => import('./Section/Favorite/Favorite'));
const Registration = lazy(() => import('./Section/Authorization/Registration'));
const Contacts = lazy(() => import('./Section/Contacts/Contacts'));
const Profile = lazy(() => import('./Section/Profile/Profile'));
const Login = lazy(() => import('./Section/Authorization/Login'));
const Details = lazy(() => import('./Section/Details/Details'));
const Product = lazy(() => import('./Section/Home/Product'));
const Home = lazy(() => import('./Section/Home/Home'));
const Basket = lazy(() => import('./Section/Basket/Basket'));
const Sale = lazy(() => import('./Section/Sale/Sale'));
const About = lazy(() => import('./Section/About/About'));

function Section() {
    const themeContext = useContext(ThemeContext);
    return(
        <div>
            <Suspense fallback={<div>Loading wait second...</div>}>
                <section style={themeContext.isLightTheme ? themeContext.section_light : themeContext.section_dark}>
                    <Route path="/" exact component={Home}/>
                    <Route path="/favorite" exact component={Favorite} />
                    <Route path="/product" exact component={Product}  />
                    <Route path="/product/:id" exact component={Details} />
                    <Route path="/basket" exact component={Basket} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/registration" exact component={Registration} />
                    <Route path="/contact" exact component={Contacts} />
                    <Route path="/profile" exact component={Profile}/>
                    <Route path="/about" exact component={About} />
                    <Route path="/sale" exact component={Sale} />
                </section>
            </Suspense>
        </div>
    )
}
export default Section;
