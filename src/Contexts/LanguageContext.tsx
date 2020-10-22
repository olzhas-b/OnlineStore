import React, {Component, createContext} from 'react';
import {LANGUAGE} from "../Interface/Interface";
import {initialLanguage} from "../Data/initialDATA";

export const languageContext = createContext<LANGUAGE>(initialLanguage);
class LanguageContextProvider extends Component {
    state: LANGUAGE = initialLanguage;
    changeLanguage = () => {
        console.log(this.state.isEN);
        this.setState({...this.state, isEN: !this.state.isEN});
    };
    render() {
        const {changeLanguage} = this;
        const {isEN, ru, en} = this.state;
            return(
                <languageContext.Provider value={{changeLanguage, isEN, ru, en}}>
                    {this.props.children}
                </languageContext.Provider>
            );
    }
}

export default LanguageContextProvider;
