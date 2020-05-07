import React from 'react';

import { useSelector } from "react-redux";
import CssBaseline from '@material-ui/core/CssBaseline';

import LoginPage from '../features/login/LoginPage';
import SeriesPage from '../features/series/SeriesPage';

import './App.css';

function App() {

  const isAuthentificated = useSelector((state) => state.login.isAuthentificated);

  return (
    <div className="App">
      <CssBaseline />
      {isAuthentificated ? <SeriesPage /> : <LoginPage />}
    </div>
  );
}

export default App;
