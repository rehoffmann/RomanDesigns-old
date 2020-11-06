import React from 'react';
import classes from "./Home.module.scss";
import Footer from "../../components/Footer/Footer.js";
import Type from "../../components/Typography/Type.js";




const Home = () => {


    return(
        <div className={classes.fullWrapper}>
           
           
            <div className={classes.topWrapper}>
                <div className={classes.textWrapper}>
                <Type/>
                </div>
            </div>

            <div className={classes.bottomWrapper}>1</div>
        </div>
    )
}

export default Home;