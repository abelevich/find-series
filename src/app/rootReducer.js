import { combineReducers } from '@reduxjs/toolkit';
import seriesReducer from '../features/series/seriesSlice';

const rootReducer = combineReducers({
  series: seriesReducer
})

export default rootReducer
