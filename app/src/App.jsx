import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import PatientRegistration from './pages/PatientRegistration';
import LiveTokenStatus from './pages/LiveTokenStatus';
import AdminDashboard from './pages/AdminDashboard';
import DoctorDashboard from './pages/DoctorDashboard';
import EmergencyAlert from './pages/EmergencyAlert';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public facing / Patient facing routes */}
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/register" replace />} />
          <Route path="/register" element={<PatientRegistration />} />
          <Route path="/status" element={<LiveTokenStatus />} />
        </Route>

        {/* Internal / Administrative routes (self-contained layouts) */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/doctor" element={<DoctorDashboard />} />
        
        {/* Emergency Overlay Page for standalone display or routing */}
        <Route path="/emergency" element={<EmergencyAlert />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
