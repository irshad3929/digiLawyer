import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  icon: {
    width: '24px',
    height: '24px',
    img: {
      objectFit: 'contain',
    },
  },
  wrapper: {
    width: '48px',
    backgroundColor: 'custom.transparentGrey',
    height: '48px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid',
    borderColor: 'custom.transparentLightGrey',
    borderRadius: '8px',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>

export default styles
