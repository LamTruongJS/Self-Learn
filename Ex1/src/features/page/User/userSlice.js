import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from 'api/userAPI';
import StorageKeys from 'constants/storage-keys.js';

export const register = createAsyncThunk('user/register', async (payload) => {
  //call API to register
  const data = await userApi.register(payload);

  //save data to local storage
  localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));
  //return user data
  return data.user; // payload
});
export const login = createAsyncThunk('user/login', async (payload) => {
  //call API to login
  const data = await userApi.login(payload);

  //save data to local storage
  localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));
  //return user data
  return data.user; // payload
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
    setting: {},
  },
  reducers: {
    logOut(state, actions) {
      //clear localStorage
      localStorage.removeItem(StorageKeys.USER);
      localStorage.removeItem(StorageKeys.TOKEN);
      state.current = {};
    },
  },
  extraReducers: {
    //trường hợp fulfilled của promise
    [register.fulfilled]: (state, action) => {
      state.current = action.payload; //data.user
    },
    [login.fulfilled]: (state, action) => {
      state.current = action.payload; //data.user
    },
  },
});
const { actions, reducer } = userSlice;
export const { logOut } = actions;
export default reducer;
