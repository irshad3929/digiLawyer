import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  container: {
    width: '88vw',
    display: 'flex',
    alignItems: 'center',
    minHeight: '400px',
    height: 'auto',
    justifyContent: 'space-between',
    backgroundColor: '#1C1C1C',
    borderRadius: '16px',
    flexDirection: { xs: 'column', md: 'row' },
  },

  left_container: {
    width: { md: '613px', xs: '100%' },
    marginLeft: { md: '70px', xs: '0' },
    textAlign: { xs: 'center', md: 'left' },
    padding: { xs: '20px', md: '0' },
  },

  right_container: {
    width: { md: '400px', xs: '100%' },
    marginRight: { md: '40px', xs: '0' },
    marginLeft: { md: '20px', xs: '0' },
    color: '#454545',
    textAlign: 'center',
    height: '300px',
    borderRadius: '15px',
  },

  normalButton: {
    padding: '8px 8px 10px',
    height: '40px',
    width: { md: '180px', xs: 'auto' },
    borderRadius: '20px',
    marginBottom: '40px',
  },

  heading: {
    color: '#9B8B5D',
    width: { md: '613px', xs: '100%' },
    marginBottom: '5px',
  },

  label: {
    width: '100%',
    color: '#D1D1D1',
    fontWeight: 'medium',
    fontSize: '15px',
    marginBottom: '30px',
  },

  heading2: {
    color: 'white',
    width: '100%',
    fontWeight: 'medium',
    fontSize: '15px',
    marginBottom: '10px',
  },

  parragraph: {
    color: '#B0B0B0',
    width: '100%',
    marginBottom: '20px',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
