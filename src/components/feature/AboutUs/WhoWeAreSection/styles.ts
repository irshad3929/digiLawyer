import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    display: 'flex',
    backgroundColor: 'neutral.1000',
    flexDirection: { xs: 'column', md: 'row' },
    width: '100vw',
    // alignItems: 'center',
    justifyContent: 'space-between',
    padding: '3vw 6vw',
  },
  textContainer: {
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
    color: 'primary.50',
  },
  subHeading: {
    color: 'common.white',
    fontSize: { xs: '14px', md: '16px' },
    fontWeight: { xs: '600', md: '400' },
  },
  description: {
    fontWeight: '400',
    fontSize: { xs: '12px', md: '14px' },
    color: 'neutral.300',
  },
  image: {
    width: { xs: '330px', md: '387px' },
    height: { xs: '296px', md: '308px' },
    borderRadius: '16px',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>

export default styles
