import React from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import ThemeContextProvider, {initialTheme} from "./Contexts/ThemeContext";
import Header from "./Components/Header";
import Section from "./Components/Section"
import DataContext from "./Data/DataContext";
export const ThemeContext = React.createContext(initialTheme)
function App() {
  return (
    <div className="app">
       <ThemeContextProvider>
           <Router>
               <Header/>
               <Section/>
           </Router>
       </ThemeContextProvider>
    </div>
  );
}

export default App;
