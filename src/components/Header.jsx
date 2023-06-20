import React from "react";

import { NavLink, Link } from "react-router-dom";

import { Button, ButtonGroup } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { ROUTES } from "../routes";
import { MAIN_COLOR } from "../constants";

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    top: 0,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    width: '100%',
    backgroundColor: '#fff',
    borderBottom: '1px solid #ccc',
  },
  mainColor: {
    color: MAIN_COLOR,
  },
})

export default function Header() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Link to={'home'}>
        <h1>Bohdana<span className={classes.mainColor}>.</span></h1>
      </Link>

      <ButtonGroup variant="string">
        {ROUTES.map((nav) => (
          <NavLink
            to={nav.key}
            key={nav.key}
            className={({ isActive }) =>
              isActive ? classes.mainColor : ""
            }
          >
            <Button>{nav.text}</Button>
          </NavLink>
        ))}
      </ButtonGroup>
    </div>
  )
}