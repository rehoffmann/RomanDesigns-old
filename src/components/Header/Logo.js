import React from 'react';
import logo from '../../assets/newlogocropped.png';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const logos = () => {
    return(
    
<NavLink to={'/'} exact>

<img src={logo}/>

</NavLink>
    )
} 

export default logos;