import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  textAreaWrapper: {
    width: '440px',
    height: '142px',
    padding: '10px 14px',
    gap: '8px',
    borderRadius: '8px',
    backgroundColor: 'common.white',
    resize: 'none',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
