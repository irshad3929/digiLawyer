import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  main: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4px 16px',
    borderRadius: '50px',
    backgroundColor: '#F6F6F6',
    gap: '3px',
    width: 'fit-content',
    height: '35px',
    transition: 'background-color 0.3s, color 0.3s',
    '&>*:hover': {
      backgroundColor: 'black',
      '&>*': {
        visibility: 'visible',
      },
    },
  },

  content: {
    textAlign: 'left',
    fontWeight: 'bold',
    color: 'black',
    '&:hover': {
      backgroundColor: 'black',
      color: 'white',
    },
  },

  icon: {
    gap: '8px',
  },
})
export type StylesClassNames = StylesClasses<typeof styles>
export default styles
