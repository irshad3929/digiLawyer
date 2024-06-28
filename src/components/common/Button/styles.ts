import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    // minHeight: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    lineHeight: '0px',
  },
  normalButton: {
    minWidth: { sm: 'auto', xs: '100%' },
    minHeight: '48px',
    textWrap: 'nowrap',
    padding: '12px 32px',
    borderColor: 'neutral.950',
    borderRadius: '8px',
    backgroundColor: 'neutral.950',
    color: 'common.white',
    gap: '8px',
    '&:hover': {
      color: 'common.white',
      borderColor: 'neutral.950',
      backgroundColor: 'neutral.950',
      boxShadow: 'none',
      '& .MuiButton-endIcon': {
        transition: 'transform 0.3s ease-in-out',
        transform: 'translateX(3px)',
      },
    },
  },
  invertButton: {
    minWidth: { sm: 'auto', xs: '100%' },
    minHeight: '48px',
    borderRadius: '8px',
    border: '1px solid',
    borderColor: 'neutral.950',
    padding: '12px 32px',
    backgroundColor: 'primary.contrastText',
    color: 'neutral.1000',
    fontWeight: 600,
    fontSize: '16px',
    '&:hover': {
      color: 'neutral.1000',
      backgroundColor: 'neutral.100',
      borderColor: 'neutral.950',
      boxShadow: 'none',
      '& .MuiButton-endIcon': {
        transition: 'transform 0.3s ease-in-out',
        transform: 'translateX(3px)',
      },
    },
  },
  label: {
    fontSize: '16px',
    fontWeight: 600,
    whiteSpace: 'nowrap',
    position: 'relative',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
