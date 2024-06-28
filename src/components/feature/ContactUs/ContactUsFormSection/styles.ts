import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: { xs: '100%', sm: '512px' },
    height: { xs: 'auto', sm: '478px' },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'neutral.50',
    borderRadius: '16px',
    gap: '8px',
    padding: { xs: '24px 20px', sm: '32px' },
  },
  btnWrapper: {
    marginTop: '14px',
    width: '148px',
    height: '48px',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
