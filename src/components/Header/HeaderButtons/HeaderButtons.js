import React from 'react';
import classes from './HeaderButtons.module.css';
import NavigationItem from './NavItem/NavigationItem';

const HeaderButtons = (props) =>(

<ul className ={classes.HeaderButtons}>
  <NavigationItem link ='/about'>About</NavigationItem>
  <NavigationItem link = '/portfolio'>Portfolio</NavigationItem>
  <NavigationItem link = '/blog'>Blog</NavigationItem>
</ul>

);


export default HeaderButtons;