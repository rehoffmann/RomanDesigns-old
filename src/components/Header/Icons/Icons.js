import React, { Component } from 'react';

import classes from './Icon.module.scss';



class Icons extends Component {

   

    render(){

    

    return(
<div className={classes.socialContainer}>

    <ul className={classes.socialIcons}>
      
        <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
        <li><a href="#"><i class="fa fa-github"></i></a></li>
        
    </ul>
   
</div>

);
    }
}

export default Icons;


