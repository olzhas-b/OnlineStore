import React, {useContext} from 'react';
import './css/Header.css'
import {DataContext} from "../Contexts/Context";
import {Link} from "react-router-dom";
import basketIcon from "./svg/basketIcon.svg";
import Toggle from "./svg/Toggle/Toggle";
import {ThemeContext} from "../Contexts/ThemeContext";
import {languageContext} from "../Contexts/LanguageContext";
import {currencyContext} from "../Contexts/CurrencyContext";
import {UserContext} from "../Contexts/UserContext";


function Header() {
    const  {basket}  = useContext(DataContext);
    const lanContext = useContext(languageContext)
    const themeContext = useContext(ThemeContext);
    const curContext = useContext(currencyContext)
    const userContext = useContext(UserContext)
    return(
        <header className={"header"} style={themeContext.isLightTheme ? themeContext.header_light : themeContext.header_dark}>
            <div className={"logo"}>
                <h1><Link to="/">TopStore</Link></h1>
            </div>
            <nav className={"header-right"}>
                <ul>
                    {/*<li><button className={"toggle_currency"} onClick={curContext.changeCurrency}>{curContext.isUSD ? 'Tenge' : 'USD'}</button></li>*/}
                    {/*<li><button className={"toggle_language"} onClick={lanContext.changeLanguage}>{lanContext.isEN ? 'RU' : 'EN'}</button></li>*/}
                    <li className={"toggle_theme"} onMouseDown={themeContext.changeTheme}>
                        <Toggle/>
                    </li>
                    <li><Link to="/">{lanContext.isEN ? lanContext.en.home : lanContext.ru.home}</Link></li>
                    <li><Link to="/contact">{lanContext.isEN ? lanContext.en.contact : lanContext.ru.contact}</Link></li>
                    <li><Link to="/about">{lanContext.isEN ? lanContext.en.about : lanContext.ru.about}</Link></li>
                    <li><Link to="/favorite">{lanContext.isEN ? lanContext.en.favorite : lanContext.ru.favorite}</Link></li>
                    <li><Link to="/login">{userContext.idAuth!==-1?`Log out`:lanContext.isEN ? lanContext.en.log_reg : lanContext.ru.log_reg}</Link></li>
                    <li><Link to="/Profile">{lanContext.isEN ? lanContext.en.profile : lanContext.ru.profile}</Link></li>
                    <li>
                        <div className={"nav-cart"}>
                            <span className={"count_basket"}>{basket.length}</span>
                            <Link to="/basket"><img src={basketIcon} alt="" width="20"/></Link>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;
