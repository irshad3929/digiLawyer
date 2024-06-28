import React from 'react'
import { Box } from '@mui/material'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'

export type VideoData = {
  src: string
  poster: string
  loop?: boolean
  autoPlay?: boolean
  muted?: boolean
}
type VideoProps = VideoData & {
  customStyles?: CustomStyles<StylesClassNames>
}
export function Video({ src, customStyles, ...rest }: VideoProps) {
  const styles = getStyles(defaultStyles, customStyles)

  return (
    <Box {...styles('wrapper')}>
      <Box {...styles('video')} component="video" {...rest}>
        <source src={src} type="video/mp4" />
      </Box>
    </Box>
  )
}
