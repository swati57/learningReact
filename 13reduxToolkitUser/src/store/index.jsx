import { configureStore } from '@reduxjs/toolkit';
import userSliceReducer from './slices/UserSlice';

const store = configureStore({
  reducer: {
    users: userSliceReducer,
  },
});

export default store;
