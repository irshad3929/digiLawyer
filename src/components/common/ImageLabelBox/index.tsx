import React from 'react'
import { Box, Typography } from '@mui/material'
import { Image as ImageType } from '@models'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'
import { Image } from '../Image'

export type ImageLabelBoxProps = {
  icon?: ImageType
  label: string
  customStyles?: CustomStyles<StylesClassNames>
}

export function ImageLabelBox({
  icon,
  label,
  customStyles,
}: ImageLabelBoxProps) {
  const styles = getStyles(defaultStyles, customStyles)

  return (
    <Box {...styles('imageLabelBox')}>
      {icon && (
        <Image {...icon} customStyles={{ wrapper: styles('icon').sx }} fill />
      )}
      <Typography {...styles('label')}>{label}</Typography>
    </Box>
  )
}
