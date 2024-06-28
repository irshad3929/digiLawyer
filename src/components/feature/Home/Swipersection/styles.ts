import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  container: {
    width: 'auto',
    height: '300px',
    // border:'2px solid black',
    marginTop: '30px',
  },

  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'auto',
    height: '12px',
    marginTop: '80px',
    marginBottom: '5px',
    color: '#616161',
    fontWeight: 'bold',
    fontSize: '200px',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
