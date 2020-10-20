import React, {Component, createContext} from 'react';
export interface theme {
    isLightTheme: boolean,
    light: {
        color: string,
        background: string
    },
    dark : {
        color: string,
        background: string
    }
}
export const initialTheme : theme = {isLightTheme: true,
    light: {color:'#555', background: '#eee'},
    dark: {color: '#ddd', background: '#555'}
};
export const ThemeContext = createContext<theme>(initialTheme);

class ThemeContextProvider extends Component {
    state = {
        isLightTheme: true,
        light: {color:'#555', background: '#eee'},
        dark: {color: '#ddd', background: '#555'}
    };
    changeTheme = () => {
        this.setState({...this.state, isLightTheme: !this.state.isLightTheme});
    }
    render() {
        return (
            <ThemeContext.Provider value={{...this.state}}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}
export default ThemeContextProvider;

