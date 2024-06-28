import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    height: 'auto',
    paddingTop: '50px',
    paddingLeft: '60px',
    paddingRight: '70px',
    paddingBottom: '50px',
  },

  container: {
    height: 'fit-content',
    alignItems: 'center',
  },

  pricingcard: {
    display: 'flex',
    paddingTop: '40px',
    justifyContent: 'space-between',
    flexDirection: { xs: 'column', md: 'row' },
    width: { xs: 'auto' },
  },

  btn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '20px',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
