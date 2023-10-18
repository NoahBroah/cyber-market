import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <div className="nav">
        <Link to="/reports">Reports</Link>
        <Link to="/deep-dives">Deep Dives</Link>
        <Link to="/companies">Companies</Link>
        <Link to="/conversations" className="new">Conversations</Link>
        <Link to="/about">About</Link>
        <div className="search-icon">🔍</div>
      </div>
    </div>
  )
}

export default NavBar;
