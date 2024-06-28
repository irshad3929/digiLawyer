import React from 'react'
import { Box, Typography } from '@mui/material'
import { Image } from '@models'
import { IconTag } from '@components/common/IconTag'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'

export type SupportCardData = {
  icon?: Image
  heading?: string
  description?: string
}

type SupportCardProps = SupportCardData & {
  customStyles?: CustomStyles<StylesClassNames>
}

export function SupportCard({
  customStyles,
  icon,
  heading,
  description,
}: SupportCardProps) {
  const styles = getStyles(defaultStyles, customStyles)

  return (
    <Box {...styles('wrapper')}>
      {icon && (
        <IconTag
          icon={icon}
          customStyles={{
            wrapper: styles('iconTag').sx,
            icon: styles('iconTag').sx,
          }}
        />
      )}

      <Box {...styles('infoContainer')}>
        <Typography variant="h4" {...styles('heading')}>
          {heading}
        </Typography>
        <Typography variant="h6" {...styles('description')}>
          {description}
        </Typography>
      </Box>
    </Box>
  )
}
