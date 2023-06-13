// src/navigation/MainNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const MainNavbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/signin">Sign In</Link>
      <Link to="/rules">Rules</Link>
      <Link to="/simulation">Simulation</Link>
      <Link to="/leaderboard">Leaderboard</Link>
    </nav>
  );
};

export default MainNavbar;
