import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, ButtonProps } from '@components/common/Button'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'

export type PostCardProps = {
  imageUrl: string
  title: string
  description: string
  date: string
  time: string
  button: ButtonProps
  customStyles?: CustomStyles<StylesClassNames>
}

export function PostCard({
  imageUrl,
  title,
  description,
  date,
  time,
  button,
  customStyles,
}: PostCardProps) {
  const styles = getStyles(defaultStyles, customStyles)
  return (
    <Card {...styles('card')}>
      <CardMedia
        component="img"
        image={imageUrl}
        alt={title}
        {...styles('cardMedia')}
      />
      <Box {...styles('dateTimeContainer')}>
        <Box {...styles('dateTime')} component="div">
          <Box>{date}</Box> <Box {...styles('dot')} /> <Box>{time}</Box>
        </Box>
      </Box>
      <Box>
        <Typography variant="h5" component="div" {...styles('title')}>
          {title}
        </Typography>
        <Typography variant="body2" {...styles('description')}>
          {description.length > 100
            ? `${description.slice(0, 99)}...`
            : description}
        </Typography>
      </Box>
      <CardActions sx={{ padding: 0 }}>
        <Button
          {...button}
          variant="text"
          customStyles={{ normalButton: styles('button').sx }}
        />
      </CardActions>
    </Card>
  )
}
