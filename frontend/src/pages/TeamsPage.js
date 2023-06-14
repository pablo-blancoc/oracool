// src/pages/TeamsPage.js
import React from 'react';
import TeamTable from '../components/TeamsTable';

export default function TeamsPage({secondaryNavbar}){
    return (
      <>
        {secondaryNavbar}
        <h1>Teams Page</h1>
        <TeamTable />
      </>
    );
  };