import React, {useContext} from 'react';
import './css/Header.css'
import {DataContext} from "../Contexts/Context";
import {Link} from "react-router-dom";
import basketIcon from "./svg/basketIcon.svg";
import Toggle from "./svg/Toggle/Toggle";
import {ThemeContext} from "../Contexts/ThemeContext";
import {languageContext} from "../Contexts/LanguageContext";

function Header() {
    const  context  = useContext(DataContext);
    const lanContext = useContext(languageContext)
    const themeContext = useContext(ThemeContext);
    return(
        <header className={"header"} style={themeContext.isLightTheme ? themeContext.header_light : themeContext.header_dark}>
            <div className={"logo"}>
                <h1><Link to="/">Online Store</Link></h1>
            </div>
            <nav className={"header-right"}>
                <ul>
                    <li><button className={"toggle_language"} onClick={lanContext.changeLanguage}>{lanContext.isEN ? 'RU' : 'EN'}</button></li>
                    <li className={"toggle_theme"} onMouseDown={themeContext.changeTheme}>
                        <Toggle/>
                    </li>
                    <li><Link to="/">{lanContext.isEN ? lanContext.en.home : lanContext.ru.home}</Link></li>
                    <li><Link to="/contact">{lanContext.isEN ? lanContext.en.contact : lanContext.ru.contact}</Link></li>
                    <li><Link to="/about">{lanContext.isEN ? lanContext.en.about : lanContext.ru.about}</Link></li>
                    <li><Link to="/favorite">{lanContext.isEN ? lanContext.en.favorite : lanContext.ru.favorite}</Link></li>
                    <li><Link to="/login">{lanContext.isEN ? lanContext.en.log_reg : lanContext.ru.log_reg}</Link></li>
                    <li className="close"> <img src={'/'} alt="" width="20"/> </li>
                    <li>
                        <div className={"nav-cart"}>
                            <span className={"count_basket"}>{context.basket.length}</span>
                            <Link to="/basket"><img src={basketIcon} alt="" width="20"/></Link>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;
