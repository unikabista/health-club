import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ClinicsPage from './pages/ClinicsPage';
import EmergencyPage from './pages/EmergencyPage';
import WellnessPage from './pages/WellnessPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/clinics" element={<ClinicsPage />} />
        <Route path="/emergency" element={<EmergencyPage />} />
        <Route path="/wellness" element={<WellnessPage />} />
      </Routes>
    </Router>
  );
}

export default App;
