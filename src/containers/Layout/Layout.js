import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import classes from './Layout.module.css';

import Home from "../../views/Home/Home.js";
import Header from "../../components/Header/Header.js";

class Layout extends Component {

    render () {

        return (
            <div className={classes.Layout}>
                <div className={classes.headerWrapper}>
        <Header/>
        </div>
        <div className={classes.bodyWrapper}>
        <Switch>
        <Route path ='/' exact component={Home}/>
        </Switch>
        </div>
            </div>
        );
    }
}

export default Layout;