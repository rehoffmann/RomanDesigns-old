import React from 'react';
import HeaderButtons from "./HeaderButtons/HeaderButtons.js";
import classes from './Header.module.css';
import Logo from "./Logo.js";
import Icons from "./Icons/Icons.js";


export default function Header() {

  return (
    <div className={classes.Header}>
        <nav className={classes.headerLeft}><HeaderButtons/></nav>
        <div className={classes.headerCenter}><Logo/></div>
        <div className={classes.headerRight}><Icons/></div>
    </div>
  );
}