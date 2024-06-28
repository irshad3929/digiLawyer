'use client'

import React, { useState } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import CallIcon from '@mui/icons-material/Call'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import { Box, Typography } from '@mui/material'
import { Button, ButtonProps } from '@components/common/Button'
import { TextArea, TextAreaProps } from '@components/common/TextArea'
import { TextField, TextFieldProps } from '@components/common/TextField'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'

export type ContactUsFormSectionProps = {
  // heading?: string
  button: ButtonProps
  textField: TextFieldProps
  textArea: TextAreaProps
  customStyles?: CustomStyles<StylesClassNames>
}

export function ContactUsFormSection({
  // heading,
  customStyles,
}: ContactUsFormSectionProps) {
  const styles = getStyles(defaultStyles, customStyles)

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contact: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    setFormData({
      fullName: '',
      email: '',
      contact: '',
      message: '',
    })
  }

  return (
    <Box {...styles('wrapper')}>
      <Typography variant="h4">Please fill this form</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          startIcon={<PermIdentityIcon />}
          placeholder="Enter your full name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        <TextField
          startIcon={<MailOutlineIcon />}
          placeholder="Enter your email here"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          startIcon={<CallIcon />}
          placeholder="Enter your contact here"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
        />
        <TextArea
          placeholder="Share your message here"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <Button
          type="submit"
          endIcon={<ArrowForwardIcon />}
          label="Submit"
          customStyles={{ normalButton: styles('btnWrapper').sx }}
        />
      </form>
    </Box>
  )
}
