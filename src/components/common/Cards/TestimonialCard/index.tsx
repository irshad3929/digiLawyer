/* eslint-disable react/no-array-index-key */
import React from 'react'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import { Box, Typography } from '@mui/material'
import { UserInfo } from '@models'
import { Image as CommonImage } from '@components/common/Image'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'

export type TestimonialCardData = {
  user: UserInfo
  rating: number
  text: string
}

type TestimonialCardProps = TestimonialCardData & {
  customStyles?: CustomStyles<StylesClassNames>
}

export function TestimonialCard({
  rating,
  text,
  user,
  customStyles,
}: TestimonialCardProps) {
  const styles = getStyles(defaultStyles, customStyles)

  return (
    <Box {...styles('wrapper')}>
      <Box sx={styles('rating').sx}>
        {new Array(rating - 1).fill(0).map((_, index) => (
          <StarRoundedIcon key={index} />
        ))}
        <StarRoundedIcon />
      </Box>
      <Typography variant="body2" {...styles('text')}>
        “{text}”
      </Typography>
      <Box {...styles('userWrapper')}>
        <CommonImage
          {...user.image}
          fill
          customStyles={{ wrapper: styles('image').sx }}
        />
        <Box {...styles('infoWrapper')}>
          <Typography variant="h4" className="userName">
            {user.name}
          </Typography>
          <Typography variant="body2" className="userDesignation">
            {user.designation}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
