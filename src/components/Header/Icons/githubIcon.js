import React from 'react';
import git from '../../../assets/github.png';
import classes from "./Icon.module.css";

const logos = () => {
    return(
        <a href='https://github.com/rehoffmann'>
        <img className={classes.resize} src={git}/>
        </a>
    )
} 

export default logos;