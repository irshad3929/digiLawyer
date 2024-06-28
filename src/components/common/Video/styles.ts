import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: { width: '100%', height: '100%' },
  video: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>

export default styles
