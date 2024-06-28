import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: { xs: '100%', md: '300px' },
    maxWidth: '356px',
    height: 'auto',
    borderRadius: '8px',
    overflow: 'hidden',
    boxSizing: 'border-box',
    position: 'relative',
    padding: '10px 12px',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all 0.5s ease-in-out',
    '&:hover': {
      backgroundColor: '#E5E4E2',
      '&>*': {
        visibility: 'visible',
      },
    },
  },
  heading: {
    color: 'neutral.950',
    fontWeight: 'light',
    whiteSpace: 'nowrap',
  },
  description: {
    color: 'neutral.500',
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': '2',
    textOverflow: 'ellipsis',
  },

  iconTag: {
    backgroundColor: 'common.white',
    color: 'black',
    transition: 'all 0.3s ease-in-out', // Ensure smooth transition for background color
    marginRight: '4px',
  },

  infoContainer: {
    width: 'calc(100% - 48px)',
    color: 'common.white',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },

  Icon: {
    visibility: 'hidden',
    transition: 'all 0.6s ease-in-out',
    backgroundColor: 'none',
    filter: 'invert(1) brightness(1000%)',
    border: 'none',
    height: '14px',
    width: '15px',
    marginLeft: '10px',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>

export default styles
