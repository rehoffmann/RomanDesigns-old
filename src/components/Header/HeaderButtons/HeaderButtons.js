import React from 'react';
import classes from './HeaderButtons.module.css';
import Button from '../../Header/Button/Button.js';

const HeaderButtons = (props) =>(

<ul className ={classes.HeaderButtons}>
    <div className={classes.spacer}/>
<Button link ='/'>About</Button>
<div className={classes.spacer}/>
   <Button link ='/'>Apps</Button>
   <div className={classes.spacer}/>
  <Button link = '/'>Designs</Button>
</ul>

);


export default HeaderButtons;