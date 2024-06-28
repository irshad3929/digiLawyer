import React from 'react'
import { Box, Typography } from '@mui/material'
import { Image } from '@models'
import { IconTag } from '@components/common/IconTag'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'

export type MenuOptionCardData = {
  icon?: Image
  heading?: string
  description?: string
  redirectionUrl?: string
}

type MenuOptionCardProps = MenuOptionCardData & {
  customStyles?: CustomStyles<StylesClassNames>
}

const arrowIcon: Image = {
  src: '/icons/arrow-right.png',
  alt: 'right arrow',
}

export function MenuOptionCard({
  customStyles,
  icon,
  heading,
  description,
}: MenuOptionCardProps) {
  const styles = getStyles(defaultStyles, customStyles)

  return (
    <Box {...styles('wrapper')}>
      {icon && (
        <IconTag icon={icon} customStyles={{ wrapper: styles('iconTag').sx }} />
      )}

      <Box {...styles('infoContainer')}>
        <Typography variant="body2" {...styles('heading')}>
          {heading}
        </Typography>
        <Typography variant="body1" {...styles('description')}>
          {description}
        </Typography>
      </Box>
      <IconTag icon={arrowIcon} customStyles={{ wrapper: styles('Icon').sx }} />
    </Box>
  )
}
