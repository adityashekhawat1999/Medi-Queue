import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Mock data for the live token status
  currentTokenNumber: 'T-104',
  estimatedWaitTime: 45, // in minutes
  currentDepartment: 'General Medicine',
  registrationComplete: false,

  // Future use / placeholder states for API fetching
  loading: false,
  error: null,
};

export const patientSlice = createSlice({
  name: 'patient',
  initialState,
  reducers: {
    setRegistrationComplete: (state, action) => {
      // Simulate registering a patient and allocating a mockup token
      state.registrationComplete = true;
      state.currentTokenNumber = action.payload?.token || 'T-105';
      state.estimatedWaitTime = action.payload?.wait || 50;
    },
    resetRegistration: (state) => {
      state.registrationComplete = false;
      state.currentTokenNumber = null;
    }
  },
});

export const { setRegistrationComplete, resetRegistration } = patientSlice.actions;

export default patientSlice.reducer;
