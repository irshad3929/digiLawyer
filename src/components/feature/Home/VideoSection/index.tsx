import React from 'react'
import { Box } from '@mui/material'
import { Video } from '@components/common'
import { getStyles } from '@utils/styles'
import defaultstyles from './styles'

export function VideoSection() {
  const styles = getStyles(defaultstyles)
  return (
    <Box {...styles('box')}>
      <Video
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
        poster="https://example.com/poster-image.jpg" // Replace with a valid URL for your poster image
        autoPlay // Example: add other props like autoPlay if needed
        muted
        loop
        customStyles={{ wrapper: styles('wrapper').sx }}
      />
    </Box>
  )
}
