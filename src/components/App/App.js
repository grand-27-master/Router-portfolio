import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Home from './../Home/Home';
import About from './../About/About';
import Projects from './../Projects/Projects';
import Skills from './../Skills/Skills';
import Contact from './../Contact/Contact';
import Navbar from './../Navbar/Navbar';
import GoHome from './../GoHome/GoHome';
import './App.css';

// function App() {
//   return (
//       <h1>hello world</h1>
//   );
// }

// const HomeComponent = ()=>{
//   return(
//     <div>
//       <h1>Home page</h1>
//     </div>
//   )
// }

const App = ()=>{
  return(
    <div>
     <Router>
     <div>
       <Navbar></Navbar>
       <Route exact path='/' component={Home}/>
       <Route exact path='/about' component={About}/>
       <Route exact path='/projects' component={Projects}/>
       <Route exact path='/skills' component={Skills}/>
       <Route exact path='/contact' component={Contact}/>
       <GoHome></GoHome>
     </div>
     </Router>
    </div>
  )
}

export default App;
