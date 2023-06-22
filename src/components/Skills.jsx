import React from "react";

import { makeStyles, withStyles } from "@mui/styles";
import CheckSharpIcon from "@mui/icons-material/CheckSharp";

const useStyles = makeStyles({
  skill: {
    display: 'flex',
    alignItems: 'center',
  },
})

export const CheckIcon = withStyles({
  root: {
    color: '#00a13b',
    margin: '0 .5rem 0 1rem',
  }
})(CheckSharpIcon)

const SKILLS = [
  'HTML', 
  'CSS, SASS/SCSS/LESS', 
  'Adaptive and responsive layout', 
  'Fluent knowledge of JavaScript',
  'React (React Hooks)',
  'Redux',
  'React Router',
  'GIT/GitHub',
  'MaterialUI/styled-components',
  'Formik',
]

export default function Skills() {
  const classes = useStyles()

  return (
    <div>
      <p>I am inspired by creating great work with people who are as passionate as I am about building something awesome.</p>

      <h3>Frontend Development</h3>
      <div>{SKILLS.map(skill => (
        <div key={skill} className={classes.skill}>
          <CheckIcon />
          {skill}
        </div>
      ))}</div>

      <h3>Other</h3>
      <p>Upper-Intermediate level of English, experience working in a team environment, good eye for quality design and aesthetics.</p>
    </div>
  )
}