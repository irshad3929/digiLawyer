import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    // display: { xs: 'none', md: 'unset' },
    width: { xs: 'auto', md: '1000px' },
    height: { xs: '450px', md: 'auto' },
    borderRadius: '16px',
    backgroundColor: 'common.white',
    // correct if not this -ve margin
    marginLeft: { xs: '-20px', md: '-250px' },
    zIndex: '999',
    position: 'absolute',
    marginTop: { xs: '10px', md: '20px' },
    boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.25)', // Offset-x, Offset-y, Blur, Color
    padding: { xs: '16px 20px', md: '16px 20px' },
  },
  gridWrapper: {
    overflowY: { xs: 'auto', md: 'unset' }, // Make the entire column scrollable on xs screens
    maxHeight: { xs: '390px', md: 'auto' },
    padding: { xs: '10px 20px', md: '2px 2px' },
    backgroundColor: 'common.white',
    overflow: 'auto',
    borderRadius: '16px',
    scrollbarWidth: 'none',
  },

  gridItem: {
    height: 'auto',
    // backgroundColor:'pink
  },
  keyElement: {
    color: '#6D6D6D',
    fontSize: '12px',
    padding: '0px 12px',
    marginBottom: '8px',
  },
  linkTag: {
    textDecoration: 'none',
  },

  backButtonWrapper: {
    width: 'auto',
    display: { xs: 'flex', md: 'none' },
    alignItems: 'center',
    backgroundColor: 'common.white',
  },
  rightIcon: {
    background: 'none',
    border: 'none',
    height: '16px',
    width: '16px',
    marginRight: '4px',
  },
  heading: {},
  cardWrapper: {},
  icon: {},
})

export type StylesClassNames = StylesClasses<typeof styles>

export default styles
