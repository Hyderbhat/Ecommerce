// src/redux/actions/authActions.js
import { LOGIN, LOGOUT, SIGNUP } from '../actionTypes'; // Assuming you are using actionTypes for these constants

// Login action
export const loginUser = (email, password) => {
  return {
    type: LOGIN,
    payload: { email, password },
  };
};

// Signup action
export const signupUser = (email, password) => {
  return {
    type: SIGNUP,
    payload: { email, password },
  };
};

// Logout action
export const logoutUser = () => {
  return {
    type: LOGOUT,
  };
};
