import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Mock data for the Admin Analytics Dashboard
  metrics: {
    totalPatientsToday: 245,
    averageWaitTime: 32, // minutes
    activeDoctors: 12,
    criticalAlerts: 3,
  },
  
  // High-level departments mock status
  departments: [
    { id: 'dept-1', name: 'General Medicine', waitQueue: 24, avgWait: 45 },
    { id: 'dept-2', name: 'Orthopedics', waitQueue: 12, avgWait: 30 },
    { id: 'dept-3', name: 'Cardiology', waitQueue: 5, avgWait: 15 },
  ],

  // Mock data for Emergency Alerts & Doctor views
  activeEmergencies: [
    { id: 'em-001', code: 'Code Blue', location: 'Ward A - Room 102', time: '10 mins ago', status: 'Active' },
    { id: 'em-002', code: 'Code Red', location: 'Emergency Entrance', time: '2 mins ago', status: 'Investigating' }
  ],
};

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    resolveEmergency: (state, action) => {
      state.activeEmergencies = state.activeEmergencies.filter(em => em.id !== action.payload.id);
    }
  },
});

export const { resolveEmergency } = dashboardSlice.actions;

export default dashboardSlice.reducer;
