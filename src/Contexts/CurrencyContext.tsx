import React, {Component, createContext} from 'react';
import {Currency} from "../Interface/Interface";
import {initialCurrency} from "../Data/initialDATA";

export const currencyContext = createContext<Currency>(initialCurrency);
class CurrencyContextProvider extends Component {
    state: Currency = initialCurrency;
    changeCurrency = () => {
        console.log(this.state.isUSD);
        this.setState({...this.state, isUSD: !this.state.isUSD});
    };
    render() {
        const {changeCurrency} = this;
        const {isUSD, tg, usd} = this.state;
            return(
                <currencyContext.Provider value={{changeCurrency, isUSD, tg, usd}}>
                    {this.props.children}
                </currencyContext.Provider>
            );
    }
}

export default CurrencyContextProvider;
