import React from 'react';
import html from './../../assets/html.png';
import css from './../../assets/css.png';
import javascript from './../../assets/js.png';
import react from './../../assets/react.png';
import java from './../../assets/java.png';
import cpp from './../../assets/c++.png';
import py from './../../assets/python.png';
import xd from './../../assets/xd.png';
import fig from './../../assets/figma.png';
import ps from './../../assets/photoshop.png';
import './Skills.css';

const Skills=()=>{
    return(
        <div className="header-text">
            <h1>My Skills.</h1>
            <p className="bio">Here's the tech stack I've worked with!</p>

            <div className="icons">

                <img className="icon-1" src={html} alt="html"></img>
                <img className="icon-2" src={css} alt="css"></img>
                <img className="icon-3" src={javascript} alt="js"></img>
                <img className="icon-4" src={react} alt="react"></img>
                <img className="icon-5" src={java} alt="java"></img>
                <img className="icon-6" src={cpp} alt="c++"></img>
                <img className="icon-7" src={py} alt="py"></img>
                <img className="icon-8" src={xd} alt="xd"></img>
                <img className="icon-9" src={fig} alt="fig"></img>
                <img className="icon-10" src={ps} alt="ps"></img>
            </div>
        </div>
    )
}

export default Skills;