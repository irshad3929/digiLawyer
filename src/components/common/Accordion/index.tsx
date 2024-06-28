import * as React from 'react'
import { useState, useEffect } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import {
  Box,
  Typography,
  Accordion as MuiAccordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'

export type ItemProps = {
  id: string
  label: string
  description: string
  active?: boolean
}

export type AccordionProps = {
  items: ItemProps[]
  onToggle?: (id: string) => void
  customStyles?: CustomStyles<StylesClassNames>
  icon?: React.ReactNode
}

export function Accordion({ items, customStyles }: AccordionProps) {
  const styles = getStyles(defaultStyles, customStyles)
  const [activeAcc, setActiveAcc] = useState<string>()

  useEffect(() => {
    const activeItem = items.find((item) => item.active)
    setActiveAcc(activeItem?.id)
  }, [items])

  const handleToggle = (id: string) => {
    if (id !== activeAcc) {
      setActiveAcc(id)
    }
  }

  return (
    <Box sx={styles('wrapper').sx}>
      {items.map((item) => (
        <MuiAccordion
          key={item.id}
          component={Box}
          sx={styles('accordion').sx}
          expanded={item.id === activeAcc}
          onClick={() => handleToggle(item.id)}
          // eslint-disable-next-line react/no-children-prop
          children={
            <>
              <AccordionSummary
                aria-controls={`${item.id}-content`}
                id={`${item.id}-header`}
                sx={styles('summary').sx}
                expandIcon={<ArrowDropDownIcon htmlColor="white" />}
              >
                <Box {...styles('infoContainer')}>
                  <Typography sx={styles('label').sx}>{item.label}</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={styles('details').sx}>
                <Typography sx={styles('description').sx}>
                  {item.description}
                </Typography>
              </AccordionDetails>
            </>
          }
        />
      ))}
    </Box>
  )
}
