import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    display: 'flex',

    backgroundColor: 'common.white',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px 10px',
    height: 'auto',
    width: { xs: '370px', md: '800px' },
    // gap:'15px',
  },
  heading: {
    marginX: { xs: '20%', md: '30%' },
    color: '#2D2D2D',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  para: {
    color: '#6D6D6D',
    textAlign: 'center',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>

export default styles
