import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Box, Typography } from '@mui/material'
import { Image as ImageType } from '@models'
import { Image } from '@components/common/Image'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, {
  StylesClassNames,
  blackStyles,
  whiteStyles,
} from './styles'
import { Button } from '../Button'

export type InfoPricingCardData = {
  cardTitle: string
  cardImage: ImageType
  inverted?: boolean
  description: {
    title: string
    items: {
      description: string
      image: ImageType
    }[]
  }
}

type InfoPricingCardProps = InfoPricingCardData & {
  customStyles?: CustomStyles<StylesClassNames>
}

export function PricingPlanCard({
  cardTitle,
  cardImage,
  description,
  customStyles,
  inverted,
}: InfoPricingCardProps) {
  const variantStyles = inverted ? blackStyles : whiteStyles

  const styles = getStyles(defaultStyles, variantStyles, customStyles)

  return (
    <Box {...styles('wrapper')}>
      <Box {...styles('contentWrapper')}>
        <Box {...styles('cardTitleWrapper')}>
          <Box {...styles('cardTitleImageWrapper')}>
            <Image
              customStyles={{ wrapper: { ...styles('cardTitleImage').sx } }}
              {...cardImage}
              fill
            />
          </Box>
          <Typography variant="h4" {...styles('cardTitle')}>
            {cardTitle}
          </Typography>
        </Box>
        <Box {...styles('border')} />
        <Box {...styles('infoContainer')}>
          <Typography variant="h4" {...styles('title')}>
            {description.title}
          </Typography>
          {description.items.map((item) => (
            <Box key={item.description} {...styles('descWrapper')}>
              <Image
                {...item.image}
                fill
                customStyles={{ wrapper: styles('descImage').sx }}
              />
              <Typography variant="h6" {...styles('description')}>
                {item.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Button
        label="Try now"
        inverted={inverted}
        endIcon={<ArrowForwardIcon />}
      />
    </Box>
  )
}
