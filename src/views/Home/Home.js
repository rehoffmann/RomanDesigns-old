import React from 'react';


import classes from "./Home.module.css";
import Type from "../../components/Typography/Type.js";

import Trianglify from "@planningcenter/react-trianglify";

const Home = () => {

    //potential static coloring for trianglify:  '#ff9e00', '#d90429', '#240046'     '#240046', '#d90429', '#ff9e00'

    return(
        <div className={classes.fullWrapper}>
            
            <div className={classes.topWrapper}>
           
            <Trianglify className={classes.background} height={2000} width={2000} variance={0.9} cellSize={100} xColors={['#ff9e00', '#d90429', '#240046']}/>
           
                <div className={classes.textWrapper}>
                <Type/>
                </div>
    
            </div>

            
        </div>
    )
}

export default Home;