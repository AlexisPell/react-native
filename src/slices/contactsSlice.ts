import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from './../store';
import {REDUCERS} from './constants';

interface IContactsState {
  getContacts: {
    data: any;
    error: any | null;
    loading: boolean;
  };
  getContact: {
    data: any;
    error: any | null;
    loading: boolean;
  };
  deleteContact: {
    data: any;
    error: any | null;
    loading: boolean;
  };
}
const initialState: IContactsState = {
  getContacts: {
    data: {},
    error: null,
    loading: false,
  },
  getContact: {
    data: {},
    error: null,
    loading: false,
  },
  deleteContact: {
    data: {},
    error: null,
    loading: false,
  },
};

export const contactsSlice = createSlice({
  name: REDUCERS.CONTACTS,
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

export const contactsActions = contactsSlice.actions;
export const contactsSelectors = {
  // travelTimeInformation: (state: RootState) => state.nav.travelTimeInformation,
};

export default contactsSlice.reducer;
