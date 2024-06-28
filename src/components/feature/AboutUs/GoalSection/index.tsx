import { Box } from '@mui/material'
import { Image as ImageType } from '@models'
import { Image, SupportCard, SupportCardData } from '@components/common'
import {
  SectionHeader,
  SectionHeaderProps,
} from '@components/common/SectionHeader'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export type GoalSectionProp = {
  sectionHeader: SectionHeaderProps
  cardData: SupportCardData[]
  image: ImageType
}
export function GoalSection({
  sectionHeader,
  cardData,
  image,
}: GoalSectionProp) {
  const styles = getStyles(defaultStyles)
  return (
    <Box {...styles('wrapper')}>
      <SectionHeader
        {...sectionHeader}
        customStyles={{
          wrapper: styles('sectionHeaderWrapper').sx,
          heading: styles('heading').sx,
        }}
      />
      <Box {...styles('cardContainer')}>
        {cardData.map((data) => {
          return (
            <SupportCard
              {...data}
              customStyles={{
                wrapper: styles('cardWrapper').sx,
                iconTag: styles('cardIcon').sx,
                heading: styles('cardHeading').sx,
              }}
            />
          )
        })}
        <Image {...image} customStyles={{ wrapper: styles('image').sx }} fill />
      </Box>
    </Box>
  )
}
