import { inputBaseClasses } from '@mui/material/InputBase'
import { outlinedInputClasses } from '@mui/material/OutlinedInput'
import { svgIconClasses } from '@mui/material/SvgIcon'
import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  textFieldWrapper: {
    width: '100%',
    padding: '10px 0px',
    gap: '8px',
    [`& .${outlinedInputClasses.root}`]: {
      [`& .${outlinedInputClasses.notchedOutline}`]: {
        borderColor: 'neutral.50',
        borderRadius: '8px',
      },
    },
    [`& .${inputBaseClasses.root}`]: {
      height: '40px',
      borderRadius: '8px',
      backgroundColor: 'common.white',
    },
    [`& .${inputBaseClasses.input}`]: {
      fontSize: '16px',
    },
    [`& .${svgIconClasses.root}`]: {
      width: '16px',
      height: '16px',
    },
  },
  startIcon: {
    display: 'flex',
    alignItems: 'center',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
