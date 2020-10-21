import React from 'react';
import './css/Header.css'
import {Link} from "react-router-dom";
function Header() {
    return(
        <header>
            <div className="logo">
                <h1><Link to="/">Online Store</Link></h1>
            </div>
            <nav>
                <ul>
                    <li><button>white</button></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/product">Product</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/login">Login / Register</Link></li>
                    <li className="close" >
                        <img src={'/'} alt="" width="20"/>
                    </li>
                </ul>
                <div className="nav-basket">
                    {/*<span>{basket.length}</span>*/}
                    {/*<Link to="/basket">*/}
                    {/*    <img src={BasketIcon} alt="" width="20"/>*/}
                    {/*</Link>*/}
                </div>
            </nav>
        </header>
    )
}
export default Header;
