import React from "react";

import { Formik, Form, Field, getIn } from "formik";
import * as Yup from "yup";

import { makeStyles } from "@mui/styles";
import { TextField, Button } from "@mui/material";

import cn from "classnames";

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 900,
  },
})

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  message: Yup.string()
    .required('Required'),
});

export function MUIFormikTextField(props) {
  const {
    field,
    form,
    helperText,
    ...other
  } = props

  const { name } = field
  const { touched, errors } = form

  const fieldError = getIn(errors, name)
  const showError = getIn(touched, name) && Boolean(fieldError)

  return (
    <TextField
      {...field}
      {...other}
      id={name}
      fullWidth
      color="success"
      margin="dense"
      error={showError}
      helperText={showError ? fieldError : helperText}
    />
  )
}

export default function Contact () {
  const classes = useStyles()

  const handleSubmit = (values, { resetForm }) => {
    sendMessage(values)
    resetForm()
  }

  const sendMessage = (text) => {
    const url = `https://api.telegram.org/bot6054865165:AAFMeSDKyztDTiZYFBHbUxux-N5Tg38f6UM/sendMessage`

    const obj = {
      chat_id: '264639255',
      text: `Name: ${text.name} \nEmail: ${text.email} \nMessage: ${text.message}`,
    };

    const xht = new XMLHttpRequest()
    xht.open("POST", url, true)
    xht.setRequestHeader("Content-type", "application/json; charset=UTF-8")
    xht.send(JSON.stringify(obj))
  }

  return (
    <div>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        <Form className={cn(classes.root, "form_media")}>
          <h3>CONTACT FORM</h3>

          <Field
            name={'name'}
            component={MUIFormikTextField}
            label={'Name'}
          />
          <Field
            name={'email'}
            component={MUIFormikTextField}
            label={'Email'}
          />
          <Field
            name={'message'}
            component={MUIFormikTextField}
            label={'Message'}
            minRows={6}
            multiline
          />

          <Button
            type="submit"
            fullWidth
            size="large"
            color="success"
            variant="outlined"
          >
            Submit
          </Button>
        </Form>
      </Formik>
    </div>
  )
}