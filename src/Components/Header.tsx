import React, {useContext} from 'react';
import './css/Header.css'
import {DataContext} from "../Data/Context";
import {Link} from "react-router-dom";
import basketIcon from "./svg/basketIcon.svg";
import Toggle from "./Toggle/Toggle";

function Header() {
    const  context  = useContext(DataContext);

    return(
        <header className={"header"}>
            <div className={"logo"}>
                <h1><Link to="/">Online Store</Link></h1>
            </div>
            <nav className={"header-right"}>
                <ul>
                    <li>ru</li>
                    <li onClick={() => {console.log("hello")}}>
                        <Toggle/>
                    </li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/favorite">Favorite</Link></li>
                    <li><Link to="/login">Login / Register</Link></li>
                    <li className="close"> <img src={'/'} alt="" width="20"/> </li>
                    <li>
                        <div className={"nav-cart"}>
                            <span>{context.basket.length}</span>
                            <Link to="/basket"><img src={basketIcon} alt="" width="20"/></Link>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;
