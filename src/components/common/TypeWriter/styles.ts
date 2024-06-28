import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  cursor: {
    display: 'inline-block',
    width: '1px',
    animation: 'blink 1s infinite',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
