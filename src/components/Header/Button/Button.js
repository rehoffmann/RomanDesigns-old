import React from 'react';
import classes from './Button.module.css';

const Button = (props) =>(

    <li className={classes.Button}>
        <a 
        href={props.link}
        className={props.active ? classes.active : null}>{props.children}</a>
        </li>

);


export default Button;