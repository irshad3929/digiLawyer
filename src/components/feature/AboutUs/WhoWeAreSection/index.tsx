import { Box, Typography } from '@mui/material'
import { Image as ImageType } from '@models'
import { Image } from '@components/common'
import {
  ImageLabelBox,
  ImageLabelBoxProps,
} from '@components/common/ImageLabelBox'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export type WhoWeAreSectionProp = {
  heading: string
  subHeading: string
  description: string
  image: ImageType
  sectionHeading: ImageLabelBoxProps
}
export function WhoWeAreSection({
  sectionHeading,
  heading,
  subHeading,
  description,
  image,
}: WhoWeAreSectionProp) {
  const styles = getStyles(defaultStyles)

  return (
    <Box {...styles('wrapper')}>
      <Box {...styles('textContainer')}>
        <ImageLabelBox {...sectionHeading} />
        <Typography sx={styles('heading').sx}>{heading}</Typography>
        <Typography sx={styles('subHeading').sx}>{subHeading}</Typography>
        <Typography sx={styles('description').sx}>{description}</Typography>
      </Box>
      <Image {...image} customStyles={{ wrapper: styles('image').sx }} fill />
    </Box>
  )
}
