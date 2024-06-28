import * as React from 'react'
import { Box, Tab, Tabs } from '@mui/material'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'

export type TabProps = {
  label: string
  id: number
}

export type SelectedTab = TabProps & { index: number }

export type TabPanelProps = {
  onSelect?: (items: SelectedTab) => void
  items: TabProps[]
  selectedTab: number
}

export type Props = TabPanelProps & {
  customStyles?: CustomStyles<StylesClassNames>
}

export function TabPanel({
  items,
  onSelect,
  customStyles,
  selectedTab,
}: Props) {
  const styles = getStyles(defaultStyles, customStyles)
  return (
    <Box sx={styles('wrapper').sx}>
      <Tabs
        value={selectedTab}
        TabIndicatorProps={{
          sx: { display: 'none' },
        }}
        sx={styles('tabs').sx}
        aria-label="tabs"
      >
        {items.map((item, index) => (
          <Tab
            key={item.id}
            label={item.label}
            onClick={() => {
              if (onSelect) {
                onSelect({ ...item, index })
              }
            }}
            sx={styles('tab').sx}
          />
        ))}
      </Tabs>
    </Box>
  )
}
