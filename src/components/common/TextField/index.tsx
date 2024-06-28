'use client'

import React from 'react'
import {
  TextField as MuiTextField,
  TextFieldProps as MatTextFieldProps,
  InputAdornment,
} from '@mui/material'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'

export type TextFieldProps = MatTextFieldProps & {
  placeholder?: string
  startIcon?: React.ReactNode
  customStyles?: CustomStyles<StylesClassNames>
}

export function TextField({
  startIcon,
  customStyles,
  placeholder,
  ...props
}: TextFieldProps) {
  const styles = getStyles(defaultStyles, customStyles)

  return (
    <MuiTextField
      placeholder={placeholder}
      variant="outlined"
      {...styles('textFieldWrapper')}
      InputProps={{
        startAdornment: startIcon && (
          <InputAdornment {...styles('startIcon')} position="start">
            {startIcon}
          </InputAdornment>
        ),
      }}
      {...props}
    />
  )
}
