import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    height: '320px',
    width: '88vw',
    margin: 'auto',
    borderRadius: '8px',
    overflow: 'hidden',
    marginBottom: '3vw',
    img: {
      objectFit: 'cover',
    },
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
