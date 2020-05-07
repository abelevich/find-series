import { createSlice } from "@reduxjs/toolkit";

import { doLogin, doRefresh } from '../../api/tvdbAPI';
import {TOKEN_ID} from "../../app/constants"

const initialState = {
  seriesList: [],
  images: {},
  isLoading: false,
  error: null,
}

function startLoading(state) {
  state.isLoading = true;
}

function loadingFailed(state, action) {
  state.isLoading = false;
  state.error = action.payload;
  state.isAuthentificated = false;
  localStorage.removeItem(TOKEN_ID);
}

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    getLoginStart: startLoading,
    getLoginFailure: loadingFailed,
    getLoginSuccess(state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.isAuthentificated = true;
      localStorage.setItem(TOKEN_ID, payload);
    },
    performLogout(state) {
      state.isLoading = false;
      state.error = null;
      state.isAuthentificated = false;
      localStorage.removeItem(TOKEN_ID);
    },
    performRefresh(state, {payload}){
      state.isLoading = false;
      state.error = null;
      state.isAuthentificated = true;
      localStorage.setItem(TOKEN_ID, payload);
    }
  },
});

export default loginSlice.reducer;

export const {
  getLoginStart,
  getLoginFailure,
  getLoginSuccess,
  performLogout
} = loginSlice.actions;

export const login = ({username, apikey, userkey}) => async (dispatch) => {
  try {
    dispatch(getLoginStart());
    const data = await doLogin({username, apikey, userkey});
    dispatch(getLoginSuccess(data.token));
  } catch (err) {
    dispatch(getLoginFailure(err.toString()));
  }
};

export const refresh = () => async (dispatch) => {
  const savedToken = localStorage.getItem(TOKEN_ID);

  if (savedToken) {
    try {
    dispatch(getLoginStart());
    const data = await doRefresh(savedToken);
    dispatch(getLoginSuccess(data.token));
    } catch (err) {
      dispatch(getLoginFailure(err.toString()));
    }
  }
}

export const logout = () => (dispatch) => {
  dispatch(performLogout());
} 
