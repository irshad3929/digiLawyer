import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: '100%',
    height: '400px',
    maxWidth: '432px',
    borderRadius: '8px',
    backgroundColor: 'neutral.50',
  },
  image: { height: '100%', width: '100%', img: { objectFit: 'contain' } },
  heading: {
    marginBottom: '16px',
  },
  description: {
    height: 'calc(100% - 48px)',
    fontWeight: 'regular',
    color: 'neutral.500',
  },
  imageWrapper: {
    width: '100%',
    height: '50%',
  },
  infoContainer: {
    width: '100%',
    height: '50%',
    padding: '32px 40px',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>

export default styles
