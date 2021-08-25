import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from './../store';
import {REDUCERS} from './constants';

interface IAuthState {
  isLoggedIn: boolean;
  data: any;
  error: any | null;
  loading: boolean;
}
const initialState: IAuthState = {
  isLoggedIn: false,
  data: {},
  error: null,
  loading: false,
};

export const authSlice = createSlice({
  name: REDUCERS.AUTH,
  initialState,
  reducers: {
    setOrigin: (
      state,
      {payload}: PayloadAction<{location: any; description: any}>,
    ) => ({
      ...state,
      origin: payload,
    }),
  },
});

export const authActions = authSlice.actions;
export const authSelectors = {
  isLoggedIn: (state: RootState) => state.auth.isLoggedIn,
  data: (state: RootState) => state.auth.data,
  error: (state: RootState) => state.auth.error,
  loading: (state: RootState) => state.auth.loading,
};

export default authSlice.reducer;
