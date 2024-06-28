import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: '100%',
    height: '72px',
    display: 'flex',
    backgroundColor: '#ffff',
    position: 'sticky',
  },
  toolbarWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#ffff',
    padding: '24px 16px',
  },
  logo: {
    width: '144px',
    height: '32px',
    background: 'none',
    marginRight: '10px',
  },

  menus: {
    color: 'black',
    display: 'flex',
    width: '432px',
    height: '32px',
    gap: '16px',
    justifyContent: 'center',
  },
  menu: {
    display: {
      xs: {
        flexDirection: 'column',
      },
      md: 'flex',
    },
    alignItems: 'center',
    color: '#808080',
    '&:hover': {
      color: 'common.black',
      cursor: 'pointer',
    },
  },
  dropdown: {
    height: '16px',
    width: '16px',
  },
  buttonWrapper: {
    width: '194px',
    height: '32px',
    gap: '16px',
    display: 'flex',
    alignItems: 'center',
  },

  tryForFreebutton: {
    width: '127px',
    height: '32px',
    borderRadius: '6px',
    border: '1px solid black',
    padding: '8px 20px',
    '&:hover': {
      color: 'common.white',
      backgroundColor: '#2D2D2D',
      border: '1px solid black',
    },
  },
  loginTextWrapper: {
    width: '51px',
    height: '24px',
  },
  textLogin: {
    width: '35px',
    height: '16px',
    color: 'neutral.500',
    '&:hover': {
      color: 'common.black',
      cursor: 'pointer',
    },
  },
  textTryForFree: {
    width: '67px',
    height: '16px',
    color: '#2D2D2D',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>

export default styles
