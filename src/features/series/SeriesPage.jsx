import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {debounce} from 'lodash';

import { makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Box from "@material-ui/core/Box";


import SearchBar from "./SearchBar";
import SeriesList from "./SeriesList";

import { fetchSeries } from "./SeriesSlice";
import { logout } from "../login/LoginSlice";

const useStyles = makeStyles((theme)=>({
  seriesList: {
    paddingTop: "1rem"
  },
  progressContainer: {
    height: ".5rem"
  }
}));

const ColorLinearProgress = withStyles({
  colorPrimary: {
    backgroundColor: '#ff0000',
  },
  barColorPrimary: {
    backgroundColor: '#ffbaba',
  },
})(LinearProgress);

const SeriesPage = (props) => {
  const dispatch = useDispatch();
  const handleOnSearch = (name) => dispatch(fetchSeries(name));
  const seriesList = useSelector((state) => state.series.seriesList);
  const isLoading =  useSelector((state) => state.series.isLoading)
  const classes = useStyles();

  return (
    <div className="series-page">
      <SearchBar onSearch={debounce(handleOnSearch, 300)} onLogout={()=>dispatch(logout())}/>
      <Box className={classes.progressContainer}>{isLoading && <ColorLinearProgress />}</Box>
      <SeriesList className={classes.seriesList} seriesList={seriesList} />
    </div>
  );
};

export default SeriesPage;
