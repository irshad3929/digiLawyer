import { Box, Typography, Tab, Tabs } from '@mui/material'
import { PostCard, PostCardProps } from '@components/common/Cards/PostCard'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'

export type TabProps = {
  label: string
}

export type RecentPostSectionProps = {
  heading: string
  tabs: TabProps[]
  cards: PostCardProps[]
  customStyles?: CustomStyles<StylesClassNames>
}

export function RecentPostSection({
  heading,
  tabs,
  customStyles,
  cards,
}: RecentPostSectionProps) {
  const styles = getStyles(defaultStyles, customStyles)

  return (
    <Box {...styles('wrapper')}>
      <Box {...styles('contentWrapper')}>
        <Typography {...styles('heading')}>{heading}</Typography>
        <Box>
          <Tabs {...styles('tabs')}>
            {tabs.map((tab) => (
              <Tab key={tab.label} label={tab.label} {...styles('tab')} />
            ))}
          </Tabs>
        </Box>
      </Box>
      <Box {...styles('cardImages')}>
        {cards.map((card) => (
          <PostCard
            key={card.title}
            {...card}
            customStyles={{ button: styles('btn').sx }}
          />
        ))}
      </Box>
    </Box>
  )
}
