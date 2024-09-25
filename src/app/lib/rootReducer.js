/* Instruments */
import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './slices/auth/authSlice';
export const rootReducer = combineReducers({
  userAuth: authSlice,
});
