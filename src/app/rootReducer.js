import { combineReducers } from '@reduxjs/toolkit';
import seriesReducer from '../features/series/SeriesSlice';
import loginReducer from '../features/login/LoginSlice';

const rootReducer = combineReducers({
  login: loginReducer,
  series: seriesReducer
})

export default rootReducer
