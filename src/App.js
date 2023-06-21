import React from "react";

import { Outlet, Navigate } from "react-router-dom";

import { makeStyles } from "@mui/styles";

import Header from "./components/Header";
import mark from  "./mark.png";

const useStyles = makeStyles({
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '120px 80px',
  },
  footer: {
    position: 'fixed',
    bottom: 0,
    height: 90,
    width: '100%',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
  },
})

function App() {
  const classes = useStyles()

  return (
    <>
      <Header />

      <div className={classes.content}>
        <Outlet />
      </div>

      <div className={classes.footer}><img src={mark} alt="Mark"/></div>

      <Navigate to="/portfolio_2.0/home" />
    </>
  );
}

export default App;
