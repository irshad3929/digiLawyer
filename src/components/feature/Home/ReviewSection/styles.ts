import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    height: 'auto',
    paddingTop: '50px',
    paddingLeft: '60px',
    paddingRight: '70px',
    paddingBottom: '50px',
    backgroundColor: 'black',
  },

  heading: {
    color: 'white',
  },

  container: {
    height: 'fit-content',
    alignItems: 'center',
  },

  pricingcard: {
    display: 'flex',
    paddingTop: '40px',
    justifyContent: 'space-between',
    flexDirection: { md: 'row' },
    // width:{xs:'auto'}
  },

  divider: {
    gap: '120px',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
