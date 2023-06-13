// src/navigation/SecondaryNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const SecondaryNavbar = () => {
  return (
    <nav>
      <Link to="/grandprix">Grand Prix</Link>
      <Link to="/drivers">Drivers</Link>
      <Link to="/teams">Teams</Link>
      <Link to="/historical-data">Historical Data</Link>
    </nav>
  );
};

export default SecondaryNavbar;
