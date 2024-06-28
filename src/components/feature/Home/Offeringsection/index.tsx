import React from 'react'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import { Box, Typography } from '@mui/material'
import { Button, Video } from '@components/common'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export function Offeringsection() {
  const styles = getStyles(defaultStyles)

  return (
    <Box
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Box {...styles('container')}>
        <Box {...styles('left_container')}>
          <Button
            customStyles={{ normalButton: styles('normalButton').sx }}
            startIcon={<AutoAwesomeIcon />}
            label="our Offering"
          />

          <Typography {...styles('heading')} variant="h1">
            Digi Lawyer
          </Typography>

          <Typography {...styles('label')}>(Your Pocket Lawyer)</Typography>

          <Typography {...styles('heading2')} variant="h3">
            Got a challan, problem or a notice, Not sure what to do?
          </Typography>

          <Typography {...styles('parragraph')}>
            Mention Your legal query in your in your own language and our
            property AI powered platform will provide you with the quickest
            advice based on nature of the case and our proprietary machine
            learning powered Case-Engine recommendations
          </Typography>
        </Box>

        <Box {...styles('right_container')}>
          <Video
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
            poster="" // Replace with a valid URL for your poster image
            autoPlay // Example: add other props like autoPlay if needed
            muted
            loop
          />
        </Box>
      </Box>
    </Box>
  )
}
