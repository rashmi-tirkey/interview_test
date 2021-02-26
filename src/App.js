import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';

import Avatar from './Avatar';
import Home from './Home';
function App() {
  return (
    <div className="container">
      <Router>
        <div style={{textAlign:"center", paddingTop:"20px", fontSize:"20px" }}>
          <nav className="nav-bar">
            <NavLink to="/" exact={true}
              className="Nav_link"
              activeClassName="activeRoute"
              activeStyle={{ color: 'red', padding:"20px"}}
            >Home</NavLink>
            <NavLink to="/home" exact={true}
              className="Nav_link"
              activeClassName="activeRoute"
              activeStyle={{ color: 'red', padding:"20px" }}
            >User List</NavLink>
          </nav>
        </div>
        <div className="parent-wrapper">
          <Route path="/" exact component={Avatar} />
          <Route path="/home" exact component={Home} />
        </div>
      </Router>
    </div>
    
    
  );
}

export default App;
