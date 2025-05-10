import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import navigationReducer from './navigationSlice';
import reducer from './cartSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    navigation: navigationReducer,
    cart: reducer
  },
});

export default store;