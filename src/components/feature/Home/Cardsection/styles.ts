import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  container: {
    height: 'auto',
    alignItems: 'center',
    marginTop: '10px',
    marginBottom: '50px',
    padding: '5px 5px 5px 5px',
  },

  heading: {
    display: 'flex',
    paddingLeft: '80px',
    justifyContent: 'space-around',
    width: 'auto',
    height: '180px',
    margin: 'auto',
    gap: '20px',
  },

  cardscontainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '20px',
  },

  cards: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
  },

  wrapper: {
    maxWidth: '500px',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
