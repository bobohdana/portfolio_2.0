import React from "react";

import { Telegram, Instagram, Facebook } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

const NETWORKS = [
  {
    Icon: Telegram,
    link: 'https://t.me/bohdanaaaaaa'
  },
  {
    Icon: Instagram,
    link: 'https://www.instagram.com/bo_soroka/'
  },
  {
    Icon: Facebook,
    link: 'https://www.facebook.com/stetsenkobohdana'
  },
]

const useStyles = makeStyles({
  content: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
})

export default function Networks() {
  const classes = useStyles()

  return (
    <div className={classes.content}>
      {NETWORKS.map(({ Icon, link }) => (
        <a key={link} href={link} target="_blank" className={classes.icon}><Icon /></a>
      ))}
    </div>
  )
}
