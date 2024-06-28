import React from 'react'
import { Box, Typography } from '@mui/material'
import { Image } from '@models'
import { IconTag } from '@components/common/IconTag'
import { Image as CommonImage } from '@components/common/Image'
import { Video, VideoData } from '@components/common/Video'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'

export type StatsOverviewCardData = {
  image?: Image
  icon?: Image
  video?: VideoData
  heading?: string
  description?: string
}

type StatsOverviewCardProps = StatsOverviewCardData & {
  customStyles?: CustomStyles<StylesClassNames>
}

export function StatsOverviewCard({
  image,
  video,
  customStyles,
  icon,
  heading,
  description,
}: StatsOverviewCardProps) {
  const styles = getStyles(defaultStyles, customStyles)

  return (
    <Box {...styles('wrapper')}>
      {icon && (
        <IconTag icon={icon} customStyles={{ wrapper: styles('iconTag').sx }} />
      )}
      {video && (
        <Video
          {...video}
          autoPlay
          muted
          loop
          customStyles={{ wrapper: styles('videoWrapper').sx }}
        />
      )}
      {image && (
        <CommonImage
          {...image}
          fill
          customStyles={{ wrapper: styles('imageWrapper').sx }}
        />
      )}
      <Box {...styles('infoContainer')}>
        <Typography variant="h6" {...styles('description')}>
          {description}
        </Typography>
        <Typography variant="h2" {...styles('heading')}>
          {heading}
        </Typography>
      </Box>
    </Box>
  )
}
