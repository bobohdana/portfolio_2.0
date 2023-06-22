import React from "react";

import { NavLink, Link } from "react-router-dom";

import { Button, IconButton, ButtonGroup } from "@mui/material";
import { Menu, MenuOpen } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

import cn from "classnames";

import { ROUTES } from "../routes";
import { MAIN_COLOR } from "../constants";

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    top: 0,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 100,
    width: '100%',
    backgroundColor: '#fff',
    borderBottom: '1px solid #ccc',
  },
  logo: {
    fontSize: '1.5rem',
  },
  mainColor: {
    color: MAIN_COLOR,
  },
})

export default function Header() {
  const classes = useStyles()
  const [isMenuOpen, setIsMenuOpen] = React.useState(true)

  const closeMenu = () => {
    if (document.documentElement.clientWidth < 801) {
      setIsMenuOpen(false)
    }
  }

  React.useEffect(() => {
    closeMenu()
  }, [])

  const changeMenuVisibility = () => 
    setIsMenuOpen(!isMenuOpen)

  return (
    <div className={cn(classes.root, "header_media")}>
      <Link to={'home'}>
        <h1 className={cn(classes.logo, "logo_media")}>
          Bohdana<span className={classes.mainColor}>.</span>
        </h1>
      </Link>

      <IconButton
        size="large"
        className="menuBtn"
        onClick={changeMenuVisibility}
      >
        {isMenuOpen ? <MenuOpen fontSize="large" /> : <Menu fontSize="large" />}
      </IconButton>

      {isMenuOpen && (
        <ButtonGroup
          variant="string"
          className="nav_media"
        >
          {ROUTES.map((nav) => (
            <NavLink
              to={nav.key}
              key={nav.key}
              className={({ isActive }) =>
                isActive ? classes.mainColor : ""
              }
              onClick={closeMenu}
            >
              <Button fullWidth>{nav.text}</Button>
            </NavLink>
          ))}
        </ButtonGroup>
      )}
    </div>
  )
}