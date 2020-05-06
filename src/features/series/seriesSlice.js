import { createSlice } from "@reduxjs/toolkit";
import { getSeries } from "../../api/tvdbAPI";
import {trim} from 'lodash';

function startLoading(state) {
  state.isLoading = true;
}

function loadingFailed(state, action) {
  state.isLoading = false;
  state.error = action.payload;
}

const initialState = {
  seriesList: [],
  isLoading: false,
  error: null,
}

export const series = createSlice({
  name: "series",
  initialState,
  reducers: {
    getSeriesStart: startLoading,
    getSeriesFailure: loadingFailed,
    getSeriesSuccess(state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.seriesList = payload;
    }
  },
});

export const {
  getSeriesStart,
  getSeriesFailure,
  getSeriesSuccess,
} = series.actions;

export default series.reducer;

export const fetchSeries = (name) => async (dispatch) => {
  try {
    dispatch(getSeriesStart());
    const series = trim(name).length > 0 ? await getSeries(name) : [];
    dispatch(getSeriesSuccess(series));
  } catch (err) {
    dispatch(getSeriesFailure(err.toString()));
  }
};
