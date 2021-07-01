// Programmatic Navigation refers to when a user is redirected as a result of an action that occurs on a route. 
// A login or signup action or form submission action on a route is a typical example of navigating programmatically

import React from 'react';
import {withRouter} from 'react-router-dom';
import homewhite from './../../assets/home_white.png';
import homeblack from './../../assets/home_black.png';

import './GoHome.css';

class GoHome extends React.Component {
    render() {

        // callback function to home
       const navigatetoHome=()=>{
            const {history}=this.props;
        // console.log(history);
        history.push('/');
       }

       const {location}=this.props;
       const whitebtn=location.pathname==='/';

        return(
            <div>
                <button className={`home-black ${whitebtn}`} onClick={navigatetoHome}>
                    <img className="home-icon" src={whitebtn?homeblack:homewhite} alt="whiteicon"></img> 
                </button>
            </div>
        )
    }
}

export default withRouter(GoHome);