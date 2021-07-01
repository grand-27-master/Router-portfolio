import React from 'react';
import { pushRotate as Menu } from 'react-burger-menu';
import {Link,withRouter } from 'react-router-dom';
import './Navbar.css';

class Navbar extends React.Component {

    render() {

  const {location}=this.props;
  // console.log(location);

  // used template literals

  const homeClass=location.pathname==='/'?'active-item':'';
  const aboutClass=location.pathname==='/About'?'active-item':'';
  // const projectsClass=location.pathname==='/Projects'?'active-item':'';
  const skillsClass=location.pathname==='/Skills'?'active-item':'';
  const contactClass=location.pathname==='/Contact'?'active-item':'';

         return (
      <Menu>
        {/* Never use <a> tag as whole page would get refreshed */}
        {/* <a id="home" className="menu-item" href="/">Home</a> */}

        <Link to="/" className={`menu-item ${homeClass}`}>Home</Link>
        <Link to="/about" className={`menu-item ${aboutClass}`}>About</Link>
        {/* <Link to="/projects" className={`menu-item ${projectsClass}`}>Projects</Link> */}
        <Link to="/skills" className={`menu-item ${skillsClass}`}>Skills</Link>
        <Link to="/contact" className={`menu-item ${contactClass}`}>Contact</Link>
        
      </Menu>
    );
    }
}

export default withRouter(Navbar);