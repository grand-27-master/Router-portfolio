import React from 'react';
import aboutgif from './../../assets/about_anime.gif';
import './About.css';

class About extends React.Component {
    render() {
        return(
            <div className="header-text">
                <h1>About Me.</h1>
                <p className="bio">Content Creator @ Knowledge Bot | Freelance Graphic Designer @ Fiverr && Upwork</p>

            {/* <div className="about-bg">
                <img src={aboutbg} className="aboutbg" alt="aboutbg"></img>
            </div> */}

            <div className="about-gif">
                <img src={aboutgif} className="about-gif" alt="aboutgif"></img>
            </div>
            </div>
        )
    }
}
export default About;