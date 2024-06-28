'use client'

import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import { Box, Typography } from '@mui/material'
import {
  BnsContainer,
  TypeWriter,
  Button,
  AvatarGroupComponent,
} from '@components/common'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

interface Avatar {
  alt: string
  src: string
}

interface HerosectionProps {
  label: string
  href: string
  heading: string
  subheading: string
  words: string[]
  avatars: Avatar[]
}

export function Herosection({
  label,
  href,
  heading,
  subheading,
  words,
  avatars,
}: HerosectionProps) {
  const styles = getStyles(defaultStyles)

  return (
    <Box {...styles('main')}>
      <BnsContainer label={label} href={href} />

      <Typography variant="h1" {...styles('heading')}>
        {heading}
        <div style={{ width: 'max-content', display: 'inline-block' }}>
          platform for <span />
          <TypeWriter words={words} typingSpeed={300} />
        </div>
      </Typography>

      <Typography variant="h3" {...styles('parragraph')}>
        {subheading}
      </Typography>

      <Box {...styles('button')}>
        <Box>
          <Button label="Try for Free" endIcon={<ArrowRightAltIcon />} />
        </Box>
        <Box>
          <Button label="Know More" link="/about-us" inverted />
        </Box>
      </Box>

      <Box {...styles('avatars')}>
        <Box>
          <AvatarGroupComponent avatars={avatars} max={5} />
        </Box>
        <Box>
          <AvatarGroupComponent avatars={avatars} max={5} />
        </Box>
      </Box>
    </Box>
  )
}
