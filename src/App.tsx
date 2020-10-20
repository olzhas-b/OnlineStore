import React from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import ThemeContextProvider, {initialTheme} from "./Contexts/ThemeContext";
import Header from "./Components/Header";
export const ThemeContext = React.createContext(initialTheme)
function App() {
  return (
    <div className="App">
       <ThemeContextProvider>
           <Header/>
       </ThemeContextProvider>
    </div>
  );
}

export default App;
