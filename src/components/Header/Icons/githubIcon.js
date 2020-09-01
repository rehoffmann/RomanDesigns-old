import React from 'react';
import git from '../../../assets/github.png';
import classes from "./Icon.module.css";

const logos = () => {
    return(
    
        <img className={classes.resize} src={git}/>
    
    )
} 

export default logos;