import React from "react";

import { makeStyles } from "@mui/styles";
import cn from "classnames";

import avatar from "../assets/avatar.jpg";

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
    <div className="home_media">
      <div className={cn(classes.intro, "intro_media")}>
        <h2>Hello, I am Bohdana Soroka</h2>
        <p>I am a Frontend developer. I am a hardworking, punctual and responsible person. I am looking for a company where I will be able to develop and improve my professional knowledge.</p>

        {info.map(({ key, Component }) => (
          <div className={classes.content} key={key}>
            <p className={classes.infoItem}>{key}</p>
            <Component />
          </div>
        ))}
      </div>

      <div className={cn(classes.avatarContainer, "avatar_media")}>
        <img src={avatar} alt="avatar" className={classes.avatar} />
      </div>
    </div>
  )
}

const useStyles = makeStyles({
  intro: {
    width: '55%',
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: '100%',
  },
})