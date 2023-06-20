import React from "react";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  institution: {
    borderBottom: '1px solid #e2e2e2',
    paddingBottom: 15,
  },
})

const INSTITUTIONS = [
  {
    year: '2014-2017',
    name: 'Ukrainian Physical and Mathematical Lyceum by Shevchenko'
  },
  {
    year: '2017-2019',
    name: 'KNU by Shevchenko, faculty: Computer Science'
  },
  {
    year: '2019',
    name: 'Frontend Developer Course in prog.kiev.ua'
  },
  {
    year: '2019-2023',
    name: 'Borys Grinchenko Kyiv University, faculty: English Philology'
  },
]

export default function Education () {
  const classes = useStyles()

  return (
    <div>
      <p>All my life I have been driven by my strong belief that education is important. I try to learn something new every single day. Despite if it is about computer science or it is something else.</p>
    
      {INSTITUTIONS.map(({ year, name }, i) => (
        <div key={name} className={i !== INSTITUTIONS.length - 1 ? classes.institution : ""}>
          <h3>{year}</h3>
          <p>{name}</p>
        </div>
      ))}
    </div>
  )
}