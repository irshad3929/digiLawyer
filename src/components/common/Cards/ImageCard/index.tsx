import React from 'react'
import { Box } from '@mui/material'
import { Image } from '@models'
import { IconTag } from '@components/common/IconTag'
import { Image as CommonImage } from '@components/common/Image'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'

export type ImageCardData = { image: Image; icon?: Image }

type ImageCardProps = ImageCardData & {
  customStyles?: CustomStyles<StylesClassNames>
}

export function ImageCard({ image, customStyles, icon }: ImageCardProps) {
  const styles = getStyles(defaultStyles, customStyles)

  return (
    <Box {...styles('wrapper')}>
      {icon && <IconTag icon={icon} />}
      <CommonImage
        {...image}
        fill
        customStyles={{ wrapper: styles('imageWrapper').sx }}
      />
    </Box>
  )
}
