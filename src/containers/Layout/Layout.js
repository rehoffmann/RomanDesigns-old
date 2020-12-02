import React, { Component } from 'react';

import classes from './Layout.module.css';

import Home from "../../views/Home/Home.js";

class Layout extends Component {

    render () {

        return (
            <div className={classes.Layout}>
             
       
    
     
        
        <Home/>
        
      
            </div>
        );
    }
}

export default Layout;