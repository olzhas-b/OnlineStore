import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import ThemeContextProvider, {initialTheme} from "./Contexts/ThemeContext";
import Header from "./Components/Header";
import Section from "./Components/Section"
import {DataProvider} from "./Data/Context";
class App extends Component{
    render() {
      return (
        <div className="app">
           <ThemeContextProvider>
               <DataProvider>
               <Router>
                   <Header/>
                   <Section/>
               </Router>
               </DataProvider>
           </ThemeContextProvider>
        </div>
      )
    }
}

export default App;
