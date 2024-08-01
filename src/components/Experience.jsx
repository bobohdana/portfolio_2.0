import React from "react";

import { Link } from "react-router-dom";

import { makeStyles } from "@mui/styles";
import { LinkedIn, GitHub } from "@mui/icons-material";

import { MAIN_COLOR } from "../constants";
import { CheckIcon } from "./Skills";

const useStyles = makeStyles({
  link: {
    color: MAIN_COLOR,
  },
  experience: {
    display: 'flex',
    alignItems: 'center',
  },
  job: {
    margin: 0,
  }
})

export default function Experience() {
  const classes = useStyles()

  return (
    <div>
      <p>This <a href="https://github.com/bobohdana/portfolio_2.0" target="_blank">portfolio <GitHub fontSize="small" /></a> is a SPA app that is created by me using React (React Hooks),
        React Router, Formik and MaterialUI as a library for design. Also I use Telegram Bot
        in order to handle <Link to="/contact" className={classes.link}>Contact Form</Link>.</p>
      <p>My experience started in 2019 after completing Frontend Developer courses.
        Almost 1.5 years I was creating landings and different simple projects using only HTML, CSS and JavaScript. </p>
      
      <div>
        <h3>I've been working as a React Frontend developer since September, 2021. </h3>
        <div>
          <div className={classes.experience}>
            <CheckIcon />
            <p className={classes.job}>
              Code Generation Software 2021-2022
              <a href="https://www.linkedin.com/company/cgs-team/" target="_blank"><LinkedIn fontSize="small" /></a>
            </p>
          </div>
          <div className={classes.experience}>
            <CheckIcon />
            <p className={classes.job}>
              The Shelf 2021-2023
              <a href="https://www.linkedin.com/company/the-shelf/" target="_blank"><LinkedIn fontSize="small" /></a>
            </p>
          </div>
          <div className={classes.experience}>
            <CheckIcon />
            <p className={classes.job}>
              WIX since September, 2023
              <a href="https://www.linkedin.com/company/wix-com" target="_blank"><LinkedIn fontSize="small" /></a>
            </p>
          </div>
          <div className={classes.experience}>
            <CheckIcon />
            <p className={classes.job}>
              Freelancing on Upwork since May, 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}