import React from 'react';
import { Link,NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to='./'>useContext</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav">

            <NavLink className="nav-link" to="./">Home</NavLink>
            
        
            <NavLink className="nav-link" to='/login'>Login</NavLink>
            
        
            <NavLink className="nav-link" to='/about'>About</NavLink>
            
        </div>
        </div>
    </nav>
    )
  
  
};
