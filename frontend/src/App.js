// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainNavbar from './navigation/MainNavbar';
import SecondaryNavbar from './components/SecondaryNavbar';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import RulesPage from './pages/RulesPage';
import SimulationPage from './pages/SimulationPage';
import LeaderboardPage from './pages/LeaderboardPage';
import GrandPrixPage from './pages/GrandPrixPage';
import DriversPage from './pages/DriversPage';
import TeamsPage from './pages/TeamsPage';
import HistoricalDataPage from './pages/HistoricalDataPage';

export default function App() {
  return (
    <Router>
      <MainNavbar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/rules" element={<RulesPage />} />
        <Route path="/simulation" element={<SimulationPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/grandprix" element={<GrandPrixPage />} />
        <Route path="/drivers" element={<DriversPage />} />
        <Route path="/teams" element={<TeamsPage />} />
        <Route path="/historicalData" element={<HistoricalDataPage />} />
      </Routes>
    </Router>
  );
}
