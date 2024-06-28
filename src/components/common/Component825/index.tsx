// pocket layer pages ka 1 component

import { Box, Button, Typography } from '@mui/material'
import { CustomStyles, getStyles } from '@utils/styles'
import defaultStyles, { StylesClassNames } from './styles'

export type PropType = {
  heading: string
  para: string
}

export type Component825PropType = PropType & {
  customStyles?: CustomStyles<StylesClassNames>
}

export function Component825({
  heading,
  para,
  customStyles,
}: Component825PropType) {
  const styles = getStyles(defaultStyles, customStyles)

  return (
    <Box sx={styles('wrapper').sx}>
      <Button>why digiLawyer</Button>
      <Typography variant="h3" sx={styles('heading').sx}>
        {heading}
      </Typography>
      <Typography sx={styles('para').sx}>{para}</Typography>
    </Box>
  )
}
