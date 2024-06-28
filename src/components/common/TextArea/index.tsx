'use client'

import React from 'react'
import { TextareaAutosize } from '@mui/material'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'

export type TextAreaProps = {
  value?: string
  name: string
  placeholder?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  customStyles?: CustomStyles<StylesClassNames>
}

export function TextArea({
  value,
  name,
  onChange,
  customStyles,
  placeholder,
  ...props
}: TextAreaProps) {
  const styles = getStyles(defaultStyles, customStyles)

  return (
    <TextareaAutosize
      minRows={10}
      name={name}
      value={value}
      placeholder={placeholder}
      style={{
        width: '100%',
        resize: 'none',
        borderRadius: '8px',
        padding: '10px 14px',
      }}
      {...styles('textAreaWrapper')}
      {...props}
    />
  )
}
