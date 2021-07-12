import React from 'react';
import classes from './App.module.css';
import {Cards,Charts,CountryPicker} from './component/index'
import image from './images/coronavirus_logo-2.jpg';


function App() {
  return (
    <div className="App">
    <img className={classes.Img} src={image} />
    <Cards/>
    <CountryPicker/>
    <Charts/>
  
    </div>
  );
}

export default App;
