import React from "react";

import { makeStyles } from "@mui/styles";

import avatar from "../avatar.jpg";

import Email from "./Email";
import Networks from "./Networks";

const info = [
  {
    key: 'Phone',
    Component: () => <a href="tel:+380664036411">+38(066)40-36-411</a>
  },
  {
    key: 'Email',
    Component: Email
  },
  {
    key: 'Social',
    Component: Networks
  },
]

export default function Home() {
  const classes = useStyles()

  return (
    <>
      <div className={classes.intro}>
        <h2>Hello, I am Bohdana Soroka</h2>
        <p>I am a Frontend developer. I am a hardworking, punctual and responsible person. I am looking for a company where I will be able to develop and improve my professional knowledge.</p>

        {info.map(({ key, Component }) => (
          <div className={classes.content} key={key}>
            <p className={classes.infoItem}>{key}</p>
            <Component />
          </div>
        ))}
      </div>

      <div className={classes.avatarContainer}>
        <img src={avatar} alt="avatar" className={classes.avatar} />
      </div>
    </>
  )
}

const useStyles = makeStyles({
  intro: {
    width: '60%',
    marginRight: 30,
  },
  content: {
    display: 'flex',
    alignItems: 'center',
  },
  infoItem: {
    width: '20%',
  },
  avatarContainer: {
    width: '35%',
    height: 500,
  },
  avatar: {
    maxHeight: 500,
  },
})