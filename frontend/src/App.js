import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainNavbar from './navigation/MainNavbar';
import SecondaryNavbar from './components/SecondaryNavbar';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import RulesPage from './pages/RulesPage';
import SimulationPage from './pages/SimulationPage';
import PredictionsPage from './pages/PredictionsPage';
import GrandPrixPage from './pages/GrandPrixPage';
import DriversPage from './pages/DriversPage';
import TeamsPage from './pages/TeamsPage';
import ChatModal from './components/ChatModal';

const rulesNavbarItems = [
  {
    title: 'Overview',
    navigateTo: '/rules',
  },
  {
    title: 'Grand Prix',
    navigateTo: '/grandprix',
  },
  {
    title: 'Drivers',
    navigateTo: '/drivers',
  },
  {
    title: 'Teams',
    navigateTo: '/teams',
  },
];

export default function App() {
  return (
    <Router>
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        <MainNavbar />
        <Routes>
          <Route path="/" exact element={<HomePage secondaryNavbar={<SecondaryNavbar />} />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route
            path="/rules"
            element={<RulesPage secondaryNavbar={<SecondaryNavbar tabItems={rulesNavbarItems} />} />}
          />
          <Route path="/simulation" element={<SimulationPage secondaryNavbar={<SecondaryNavbar />} />} />
          <Route path="/predictions" element={<PredictionsPage secondaryNavbar={<SecondaryNavbar />} />} />
          <Route
            path="/grandprix"
            element={<GrandPrixPage secondaryNavbar={<SecondaryNavbar tabItems={rulesNavbarItems} />} />}
          />
          <Route
            path="/drivers"
            element={<DriversPage secondaryNavbar={<SecondaryNavbar tabItems={rulesNavbarItems} />} />}
          />
          <Route
            path="/teams"
            element={<TeamsPage secondaryNavbar={<SecondaryNavbar tabItems={rulesNavbarItems} />} />}
          />
        </Routes>
        <ChatModal />
      </div>
    </Router>
  );
}
