import React from "react";

import { Outlet, Navigate } from "react-router-dom";

import { makeStyles } from "@mui/styles";
import cn from "classnames";

import Header from "./components/Header";
import mark from  "./assets/mark.png";

const useStyles = makeStyles({
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '60px 80px 90px',
  },
  footer: {
    position: 'fixed',
    bottom: 0,
    height: 90,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
})

function App() {
  const classes = useStyles()

  return (
    <>
      <Header />

      <div className={cn(classes.content, "content_media")}>
        <Outlet />
      </div>

      <div className={cn(classes.footer, "footer_media")}><img src={mark} alt="Mark"/></div>

      <Navigate to="/portfolio_2.0/home" />
    </>
  );
}

export default App;
