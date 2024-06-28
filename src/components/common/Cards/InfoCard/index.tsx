import React from 'react'
import { Box, Typography } from '@mui/material'
import { Image as ImageType } from '@models'
import { Image } from '@components/common/Image'
import { getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'

export type InfoCardData = {
  title: string
  description?: string
  image: ImageType
}
type InfoCardProps = InfoCardData & {
  customStyles?: StylesClassNames
}

export function InfoCard({ title, description, image }: InfoCardProps) {
  const styles = getStyles(defaultStyles)
  return (
    <Box {...styles('wrapper')}>
      <Box {...styles('imageWrapper')}>
        <Image
          {...image}
          fill
          customStyles={{ wrapper: { ...styles('image').sx } }}
        />
      </Box>
      <Box {...styles('infoContainer')}>
        <Typography variant="h4" {...styles('heading')}>
          {title}
        </Typography>
        <Typography variant="h6" {...styles('description')}>
          {description}
        </Typography>
      </Box>
    </Box>
  )
}
