import React from 'react';
import classes from './HeaderButtons.module.css';
import Button from '../../Header/Button/Button.js';



//could add spacer div but that causes awkward gaps in menu buttons

const HeaderButtons = (props) =>(

<ul className ={classes.HeaderButtons}>
   
<Button link ='/'>About</Button>
   <Button link ='/'>Apps</Button>
  <Button link = '/'>Designs</Button>

  
</ul>

);


export default HeaderButtons;