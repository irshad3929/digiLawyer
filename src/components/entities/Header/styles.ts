import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: '100%',
    height: '72px',
    display: 'flex',
    backgroundColor: 'common.white',
    position: 'sticky',
    boxShadow: 'none',
    borderBottom: '1px solid',
    borderColor: 'neutral.50',
  },
  toolbarWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'common.white',
    // backgroundColor: 'lightgray',

    padding: '24px 16px',
  },
  logo: {
    display: { xs: 'none', md: 'flex' },
    width: '144px',
    height: '32px',
    background: 'none',
    // marginRight: '10px',
    // marginLeft: '-140px',
  },

  menus: {
    color: 'black',
    display: { xs: 'none', md: 'flex' },
    width: 'auto',
    height: '32px',
    gap: '16px',
    justifyContent: 'center',
    backgroundColor: 'common.white',
  },
  menu: {
    display: 'flex',
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
    justifyContent: { xs: 'end', md: 'space-between' },
    backgroundColor: 'common.white',
    // marginRight: '30px',
  },

  tryForFreebutton: {
    width: { sm: 'auto', xs: '100%', md: 'auto' },
    height: '38px',
    borderRadius: '8px',
    border: '1px solid',
    borderColor: 'neutral.950',
    padding: '12px 16px',
    backgroundColor: 'primary.contrastText',
    color: 'neutral.1000',
    fontWeight: '600',
    fontSize: '15px',
    whiteSpace: 'nowrap',
    '&:hover': {
      color: 'common.white',
      backgroundColor: 'common.black',
      borderColor: 'neutral.950',
      boxShadow: 'none',
      '& .MuiButton-endIcon': {
        transition: 'transform 0.3s ease-in-out',
        transform: 'translateX(3px)',
      },
    },
  },
  loginTextWrapper: {
    width: '51px',
    height: '24px',
  },
  textLogin: {
    display: { xs: 'none', md: 'block' },
    width: '35px',
    height: '16px',
    color: 'neutral.500',
    fontWeight: '400',
    fontSize: '15px',
    '&:hover': {
      color: 'common.black',
      cursor: 'pointer',
    },
  },

  mobileIcons: {
    display: { xs: 'flex', md: 'none' },
    height: '48px',
    gap: '20px',
  },

  menuIcon: {
    // marginRight:'20px',
    width: '48px',
    height: '38px',
    backgroundColor: '#F6F6F6',
  },
  logoIcon: {
    background: 'none',
    height: '38px',
    width: '44px',
    padding: '2px',
    // backgroundColor:'#FF0000',
  },
  mobileIconAndMenuContainer: {
    display: { xs: 'flex', md: 'none' },
    flexDirection: 'column',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>

export default styles
