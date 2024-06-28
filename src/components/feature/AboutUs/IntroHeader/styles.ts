import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3vw 6vw',
  },
  buttonContainer: {
    display: 'none',
  },
  heading: {
    fontSize: { xs: '40px', md: '48px' },
    fontWeight: '700',
    lineHeight: { xs: '48px', md: '56px' },
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
