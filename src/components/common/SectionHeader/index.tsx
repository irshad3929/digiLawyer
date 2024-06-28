import React, { ReactNode } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Box, Typography } from '@mui/material'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'
import { Button, ButtonProps } from '../Button'
import { ImageLabelBox, ImageLabelBoxProps } from '../ImageLabelBox'

export type SectionHeaderProps = {
  label: string
  heading: ReactNode
  description: string
  button?: ButtonProps
  sectionHeading?: ImageLabelBoxProps
  customStyles?: CustomStyles<StylesClassNames>
}

export function SectionHeader({
  heading,
  description,
  customStyles,
  button,
  sectionHeading,
}: SectionHeaderProps) {
  const styles = getStyles(defaultStyles, customStyles)

  return (
    <Box sx={styles('wrapper').sx}>
      <Box sx={styles('infoContainer').sx}>
        {sectionHeading && <ImageLabelBox {...sectionHeading} />}
        <Typography sx={styles('heading').sx}>{heading}</Typography>
        <Typography sx={styles('description').sx}>{description}</Typography>
      </Box>

      <Box {...styles('buttonContainer')}>
        {button && (
          <Button
            {...button}
            endIcon={<ArrowForwardIcon />}
            customStyles={{ wrapper: styles('button').sx }}
          />
        )}
      </Box>
    </Box>
  )
}
