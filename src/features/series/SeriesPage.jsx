import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {debounce} from 'lodash';

import { makeStyles } from "@material-ui/core/styles";

import SearchBar from "./SearchBar";
import SeriesList from "./SeriesList";

import { fetchSeries } from "./SeriesSlice";

const useStyles = makeStyles((theme)=>({
  seriesList: {
    paddingTop: "1rem"
  }
}));

const SeriesPage = (props) => {
  const dispatch = useDispatch();
  const onSearchHandler = (name) => dispatch(fetchSeries(name));
  const seriesList = useSelector((state) => state.series.seriesList);
  const classes = useStyles();

  return (
    <div className="series-page">
      <SearchBar onSearch={debounce(onSearchHandler, 300)}/>
      <SeriesList className={classes.seriesList} seriesList={seriesList} />
    </div>
  );
};

export default SeriesPage;