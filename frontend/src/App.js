// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import MainNavbar from './navigation/MainNavbar';
import SecondaryNavbar from './navigation/SecondaryNavbar';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import RulesPage from './pages/RulesPage';
import SimulationPage from './pages/SimulationPage';
import LeaderboardPage from './pages/LeaderboardPage';
import GrandPrixPage from './pages/GrandPrixPage';
import DriversPage from './pages/DriversPage';
import TeamsPage from './pages/TeamsPage';
import HistoricalDataPage from './pages/HistoricalDataPage';

function App() {
  return (
    <Router>
      <MainNavbar />
      <SecondaryNavbar />
      <Routes>
        <Route path="/" exact component={HomePage} />
        <Route path="/signin" component={SignInPage} />
        <Route path="/rules" component={RulesPage} />
        <Route path="/simulation" component={SimulationPage} />
        <Route path="/leaderboard" component={LeaderboardPage} />
        <Route path="/grandprix" component={GrandPrixPage} />
        <Route path="/drivers" component={DriversPage} />
        <Route path="/teams" component={TeamsPage} />
        <Route path="/historical-data" component={HistoricalDataPage} />
      </Routes>
    </Router>
  );
}

export default App;
