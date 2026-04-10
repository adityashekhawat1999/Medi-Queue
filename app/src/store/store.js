import { configureStore } from '@reduxjs/toolkit';
import patientReducer from './patientSlice';
import dashboardReducer from './dashboardSlice';

export const store = configureStore({
  reducer: {
    patient: patientReducer,
    dashboard: dashboardReducer,
  },
});
