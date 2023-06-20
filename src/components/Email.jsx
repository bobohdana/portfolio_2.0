import React from "react";

import Snackbar from '@mui/material/Snackbar';
import { makeStyles } from "@mui/styles";

const EMAIL = 'bohdanastetsenko@gmail.com'

const useStyles = makeStyles({
  content: {
    cursor: 'pointer',
  },
})

export default function Email() {
  const [open, setOpen] = React.useState(false)
  const classes = useStyles()

  const handleClose = () => {
    setOpen(false)
  };

  const onCopy = () => {
    navigator.clipboard.writeText(EMAIL)
    setOpen(true)
  }

  return (
    <>
      <p onClick={onCopy} className={classes.content}>{EMAIL}</p>

      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message="The email is copied!"
      />
    </>
  )
}