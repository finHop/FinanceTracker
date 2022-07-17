import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {

  return (
    <> 
      <div className="nav"> 
        <div><Link className="nav-link" to="/">Dashboard</Link></div>
        <div><Link className="nav-link" to="/income">Income</Link></div>
        <div><Link className="nav-link" to="/expenses">Expenses</Link></div>
        <div><Link className="nav-link" to="/net">Net</Link></div>
        <div><Link className="nav-link" to="/assets">Assets</Link></div>
        <div><Link className="nav-link" to="/investments">Investments</Link></div>
        <div><Link className="nav-link" to="/logout">Logout</Link></div>
      </div>
    </>
  )
}

export default NavBar;