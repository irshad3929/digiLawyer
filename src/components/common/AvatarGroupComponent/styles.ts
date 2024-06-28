import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  avatarGroup: {
    minWidth: { xs: '128px', sm: '168px' },
    minHeight: { xs: '36px', sm: '44px' },
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2px 0px',
    '& .MuiAvatar-root': {
      marginLeft: '-8px !important',
    },
    transition: 'transform 0.2s ease-in-out',
    transformOrigin: 'center center',
    '&:hover': {
      '&>*': {
        transform: 'scale(1.1)',
      },
    },
  },
  avatar: {
    border: { xs: '1.6px solid', sm: '2px solid' },
    borderColor: 'neutral.100',
    minWidth: { xs: '32px', sm: '40px' },
    minHeight: { xs: '32px', sm: '40px' },
    zIndex: 1,
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
