import { accordionClasses } from '@mui/material'
import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    gap: '16px',
    padding: '16px 40px',
    backgroundColor: 'neutral.1000',
  },
  accordion: {
    [`&.${accordionClasses.root}`]: {
      borderRadius: '11px !important',
    },
  },
  summary: {
    minHeight: '56px !important',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 20px',
    cursor: 'pointer',
    backgroundColor: 'neutral.950',
    borderTopLeftRadius: '9px',
    borderTopRightRadius: '9px',
  },
  label: {
    height: { xs: '30px', sm: '24px' },
    gap: '8px',
    fontWeight: 300,
    color: 'neutral.50',
    whiteSpace: 'nowrap',
  },
  infoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  details: {
    backgroundColor: 'neutral.950',
    borderBottomLeftRadius: '9px',
    borderBottomRightRadius: '9px',
  },
  description: {
    color: 'neutral.500',
    fontSize: { xs: '12px', sm: '14px' },
    fontWeight: 400,
    lineHeight: { xs: '20px', sm: '24px' },
    textAlign: 'left',
    fontFamily: 'secondary',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
