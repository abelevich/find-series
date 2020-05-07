import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";

import LoginPage from "../features/login/LoginPage";
import { refresh } from "../features/login/LoginSlice";
import SeriesPage from "../features/series/SeriesPage";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, []);

  const isAuthentificated = useSelector(
    (state) => state.login.isAuthentificated
  );

  return (
    <div className="App">
      <CssBaseline />
      {isAuthentificated ? <SeriesPage /> : <LoginPage />}
    </div>
  );
}

export default App;
