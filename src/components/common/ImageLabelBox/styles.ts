import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  imageLabelBox: {
    width: 'max-content',
    height: '32px',
    display: 'flex',
    cursor: 'default',
    alignItems: 'center',
    borderRadius: '100px',
    border: '1px solid',
    borderColor: 'neutral.900',
    backgroundColor: 'neutral.900',
    padding: '8px 16px',
    gap: '8px',
    position: 'relative',
  },

  label: {
    position: 'relative',
    boxSizing: 'border-box',
    whiteSpace: 'nowrap',
    color: 'common.white',
    fontWeight: 'semibold',
  },
  icon: {
    width: '16px',
    height: '16px',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
