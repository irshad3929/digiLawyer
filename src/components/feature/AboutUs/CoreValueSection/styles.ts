import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: '100vw',
    // padding:'3vw 6vw',
  },
  cardContainer: {
    width: '100vw',
    padding: '3vw 6vw',
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '10px',
  },
  cardWrapper: {
    backgroundColor: 'neutral.50',
    width: '100%',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
