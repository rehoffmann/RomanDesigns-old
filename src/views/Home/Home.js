import React from 'react';
import classes from "./Home.module.scss";
import Footer from "../../components/Footer/Footer.js";
import Type from "../../components/Typography/Type.js";




const Home = () => {


    return(
        <div className={classes.fullWrapper}>
           
            <div className={classes.clouds}>
	<div className={classes.cloud + ' '+ classes.x1}></div>
	<div className={classes.cloud + ' '+ classes.x2}></div>
	<div className={classes.cloud + ' '+ classes.x3}></div>
	<div className={classes.cloud + ' '+ classes.x4}></div>
	<div className={classes.cloud + ' '+ classes.x5}></div>
            </div>
            <div className={classes.mainWrapper}>
<Type/>
</div>
<Footer/>


<div className={classes.bottomPage}>1</div>
    </div>
    )
}

export default Home;