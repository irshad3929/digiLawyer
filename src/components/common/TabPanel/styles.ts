import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: { xs: 'auto', sm: '602px' },
    backgroundColor: 'neutral.100',
    display: 'flex',
    justifyContent: 'left',
    borderRadius: '9px',
    border: '1px solid',
    borderColor: 'neutral.100',
  },
  tabs: {
    minWidth: { xs: 'auto', sm: '100%' },
    minHeight: { xs: '48px', sm: '56px' },
    borderRadius: '9px',
    backgroundColor: 'common.white',
  },
  tab: {
    minWidth: { xs: 'auto', sm: '200px' },
    minHeight: { xs: '48px', sm: '56px' },
    borderRadius: '8px',
    padding: '12px 24px',
    whiteSpace: 'nowrap',
    '&.Mui-selected': {
      backgroundColor: 'neutral.950',
      color: 'common.white',
      cursor: 'default',
    },
    '&:hover:not(.Mui-selected)': {
      backgroundColor: 'neutral.100',
    },
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
