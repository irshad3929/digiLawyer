import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: '50px',
  },

  heading: {
    width: {
      xs: 'auto',
      md: '450px',
    },
    height: '100px',
    textAlign: 'center',
    marginTop: '19px',
    fontSize: {
      xs: '30px',
      md: '40px',
    },
    fontWeight: 'bold',
  },

  parragraph: {
    width: {
      xs: 'auto',
      md: '650px',
    },
    height: '80px',
    textAlign: 'center',
    fontSize: {
      xs: '12px',
      md: '15px',
    },
    fontWeight: '200',
    lineHeight: '2.0',
    marginTop: '8px',
    color: '#6D6D6D',
  },

  button: {
    // backgroundColor:'aqua',
    display: 'flex',
    flexDirection: { md: 'row', xs: 'column' },
    width: '100%',
    padding: { xs: '5px', md: '5px' },
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '6px',
  },

  avatars: {
    width: {
      xs: 'auto',
    },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '40px',
    gap: '30px',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
