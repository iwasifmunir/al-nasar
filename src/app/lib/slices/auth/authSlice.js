import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isUserLogin: false,
  userInfo: {
    accessToken: '',
    refreshToken: '',
    user: {
      balance: 0,
      status: '',
    },
  },
};

const authSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    toggleLogin: (state, { payload }) => {
      console.log(payload);
      state.isUserLogin = payload?.isUserLogin ?? state.isUserLogin;
      state.userInfo = payload?.userInfo ?? state.userInfo;
    },
    updateUserInfo: (state, { payload }) => {
      state.userInfo.user = payload ?? state.userInfo.user;
    },
    updateUserToken: (state, { payload }) => {
      state.userInfo.accessToken =
        payload?.accessToken ?? state.userInfo.accessToken;
      state.userInfo.refreshToken =
        payload?.refreshToken ?? state.userInfo.refreshToken;
    },
  },
});

export const { toggleLogin, updateUserToken, updateUserInfo } =
  authSlice.actions;

export default authSlice.reducer;
