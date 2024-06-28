import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: '379px',
    height: '240px',
    borderRadius: '16px',
    overflow: 'hidden',
    boxSizing: 'content-box',
    position: 'relative',
  },
  imageWrapper: {
    width: '100%',
    height: '100%',
    img: {
      objectFit: 'cover',
    },
  },
})

export type StylesClassNames = StylesClasses<typeof styles>

export default styles
