import React from 'react';
import {Link} from 'react-router-dom';
import homegif from './../../assets/home_anime.gif'; 
import './Home.css';

class Home extends React.Component {
    render() {
        return(
            <div className="home-container">
                <div className="text">
                    <h1><b>Welcome to my portfolio!</b></h1>
                    <p className="bio">I am Vashishth Gajjar, a junior, pursuing CSE in VIT vellore.</p>
                </div>

                <div className="buttons">
                    <Link to="/about" className="btn btn-white"><p className="btn-text">Know more about me</p></Link>
                    <Link to="/contact" className="btn btn-transparent"><p className="btn-text">Reach out to me</p></Link>
                </div>

                <div className="video">
                    <img src={homegif} alt="homegif" className="gif"></img> 
                </div>
            </div>
        )
    }
}

export default Home;