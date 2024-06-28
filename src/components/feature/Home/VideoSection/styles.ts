import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    borderRadius: '12px solid black',
  },
  box: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
    width: { md: '700px', xs: 'auto' },
    height: '500px',
    borderRadius: '12px',
    marginTop: '60px',
    textAlign: 'center',
    overflow: 'hidden',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
