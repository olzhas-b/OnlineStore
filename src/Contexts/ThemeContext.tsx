import React, {Component, createContext} from 'react';
import {theme} from "../Interface/Interface";
import {initialTheme} from "../Data/initialDATA";

export const ThemeContext = createContext<theme>(initialTheme);

export class ThemeContextProvider extends Component {
    state: theme = initialTheme;
    changeTheme = () => {
        this.setState({...this.state, isLightTheme: !this.state.isLightTheme});
    }
    render() {
        const {isLightTheme, header_light, header_dark, section_dark, section_light,item_dark, item_light} = this.state;
        const {changeTheme} = this;
        return (
            <ThemeContext.Provider value={{isLightTheme, header_light, header_dark, section_dark, section_light, item_dark, item_light, changeTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}
export default ThemeContextProvider;

