import React from 'react'
import Link from 'next/link'
import {
  Box,
  Button as MuiButton,
  ButtonProps as MatButtonProps,
} from '@mui/material'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'

export type ButtonProps = MatButtonProps & {
  customStyles?: CustomStyles<StylesClassNames>
  label: string
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  inverted?: boolean
  link?: string
}

export function Button({
  label,
  startIcon,
  endIcon,
  inverted,
  link,
  customStyles,
  ...props
}: ButtonProps) {
  const styles = getStyles(defaultStyles, customStyles)
  const buttonVariant = inverted ? 'outlined' : 'contained'

  const ButtonComponent = (
    <MuiButton
      {...styles(inverted ? 'invertButton' : 'normalButton')}
      variant={buttonVariant}
      startIcon={startIcon}
      endIcon={endIcon}
      {...props}
    >
      <Box>{label}</Box>
    </MuiButton>
  )

  return link ? (
    <Link href={link} passHref>
      {ButtonComponent}
    </Link>
  ) : (
    ButtonComponent
  )
}
