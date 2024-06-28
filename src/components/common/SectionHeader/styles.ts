import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    display: 'flex',
    backgroundColor: 'common.white',
    flexDirection: { xs: 'column', md: 'row' },
    width: '100vw',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '3vw 6vw',
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    alignItems: 'left',
    flexBasis: { xs: '100%', md: '80%' },
  },
  heading: {
    fontSize: { xs: '24px', md: '40px' },
    fontWeight: '600',
    lineHeight: { xs: '32px', md: '48px' },
    color: 'common.black',
  },
  description: {
    fontWeight: '400',
    fontSize: { xs: '12px', md: '14px' },
    color: 'neutral.300',
  },
  buttonContainer: {
    display: 'flex',
    height: { xs: '20px', md: '100%' },
    flexBasis: { xs: '100%', md: '20%' },
    alignItems: 'end',
    backgroundColor: 'green',
  },
  button: {
    backgroundColor: 'common.black',
    color: 'common.white',
    width: { xs: '100%', md: '20%' },
    height: { xs: '30px', md: '20px' },
    fontSize: '8px',
    fontWeight: '10px',
    whiteSpace: 'nowrap',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>

export default styles
