import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Box, Typography, IconButton, Link } from '@mui/material'
import { CustomStyles, getStyles } from '@utils/styles'
import defaulStyles, { StylesClassNames } from './styles'
import embelum from '../../../../public/icons/path81-8.png'
import { Image as CommonImage } from '../Image'

type IconTagProps = {
  label: string
  customStyles?: CustomStyles<StylesClassNames>
  href: string
}

export function BnsContainer({ customStyles, label, href }: IconTagProps) {
  const styles = getStyles(defaulStyles, customStyles)
  return (
    <Link href={href} underline="none">
      <Box {...styles('main')}>
        <Box {...styles('wrapper')}>
          <IconButton {...styles('icon')}>
            <CommonImage src={embelum} alt="Embelum" width={20} height={24} />
          </IconButton>

          <Typography variant="body2" {...styles('content')}>
            {label}
          </Typography>

          <IconButton {...styles('icon')}>
            <ArrowForwardIcon sx={{ width: '12px', height: '16px' }} />
          </IconButton>
        </Box>
      </Box>
    </Link>
  )
}
