import { Box } from '@mui/material'
import { SupportCard, SupportCardData } from '@components/common'
import {
  SectionHeader,
  SectionHeaderProps,
} from '@components/common/SectionHeader'
import { getStyles } from '@utils/styles'
import defaultStyles from './styles'

export type CoreValuesProp = {
  sectionHeader: SectionHeaderProps
  cardData: SupportCardData[]
}

export function CoreValuesSection({ sectionHeader, cardData }: CoreValuesProp) {
  const styles = getStyles(defaultStyles)
  return (
    <Box {...styles('wrapper')}>
      <SectionHeader {...sectionHeader} />
      <Box {...styles('cardContainer')}>
        {cardData.map((data) => {
          return (
            <SupportCard
              {...data}
              customStyles={{ wrapper: styles('cardWrapper').sx }}
            />
          )
        })}
      </Box>
    </Box>
  )
}
