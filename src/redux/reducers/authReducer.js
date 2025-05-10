// src/redux/reducers/authReducer.js
import { LOGIN, LOGOUT, SIGNUP } from '../actionTypes';

const initialState = {
  loggedIn: false,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, loggedIn: true, user: action.payload };
    case SIGNUP:
      return { ...state, loggedIn: true, user: action.payload };
    case LOGOUT:
      return { ...state, loggedIn: false, user: null };
    default:
      return state;
  }
};

export default authReducer;
