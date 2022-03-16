import { configureStore } from '@reduxjs/toolkit';
import userReducer from 'features/page/User/userSlice';
const rootReducer = {
  user: userReducer,
};
const store = configureStore({
  reducer: rootReducer,
});
export default store;
