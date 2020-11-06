import React from 'react';


import Git from './githubIcon.js';
import Linked from './linkedinIcon.js';
import classes from './Icon.module.css';

const Icons = (props) =>(

<div>
    <Git/>
    <div className={classes.spacer}/>
    <Linked/>
    <div className={classes.spacer}/>
</div>

);


export default Icons;