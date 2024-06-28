import { Box } from '@mui/material'
import { Image as ImageType } from '@models'
import { Image } from '@components/common'
import {
  SectionHeader,
  SectionHeaderProps,
} from '@components/common/SectionHeader'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export type WhyWeAreSectionProp = {
  sectionHeader: SectionHeaderProps
  image: ImageType
}

export function WhyWeAreSection({ sectionHeader, image }: WhyWeAreSectionProp) {
  const styles = getStyles(defaultStyles)

  return (
    <Box>
      <SectionHeader {...sectionHeader} />
      <Image {...image} customStyles={{ wrapper: styles('wrapper').sx }} fill />
    </Box>
  )
}
