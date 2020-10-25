import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import ThemeContextProvider from "./Contexts/ThemeContext";
import Header from "./Components/Header";
import Section from "./Components/Section"
import {DataProvider} from "./Contexts/Context";
import Footer from "./Components/Footer";
import LanguageContextProvider from "./Contexts/LanguageContext";
import { UserProvider } from './Contexts/UserContext';
import CurrencyContextProvider from './Contexts/CurrencyContext';
class App extends Component{
    render() {
      return (
        <div className={"app"}>
            <ThemeContextProvider>
               <DataProvider>
                   <UserProvider>
                       <CurrencyContextProvider>
                           <Router>
                               <LanguageContextProvider>
                                   <Header/>
                               </LanguageContextProvider>
                               <Section/>
                               <Footer/>
                           </Router>
                       </CurrencyContextProvider>
                   </UserProvider>
               </DataProvider>
            </ThemeContextProvider>
        </div>
      )
    }
}

export default App;
