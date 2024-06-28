import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: '100%',
    height: 'auto',
    borderRadius: '12px',
    padding: '24px 16px',
    backgroundColor: 'common.white',
    // correct if not this -ve margin
    marginLeft: '-15px',
    zIndex: '999',
    position: 'absolute',
    marginBottom: '20px',
    boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.25)',
    marginTop: '12px',
  },

  menus: {
    // color: 'black',
    // display: 'flex',
    // width: '432px',
    // height: '32px',
    // gap: '16px',
    // justifyContent: 'center',
  },
  menu: {
    borderRadius: '4px',
    marginBottom: '10px',
    padding: '4px',
    color: '#808080',
    '&:hover': {
      color: 'common.black',
      backgroundColor: '#D6D6D6',
      cursor: 'pointer',
    },
  },
  dropdown: {
    height: '16px',
    width: '16px',
  },
  // buttonWrapper: {
  //   width: '194px',
  //   height: '32px',
  //   gap: '16px',
  //   display: 'flex',
  //   alignItems: 'center',
  // },
})

export type StylesClassNames = StylesClasses<typeof styles>

export default styles
