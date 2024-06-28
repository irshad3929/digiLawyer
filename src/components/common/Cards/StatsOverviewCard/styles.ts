import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: { xs: '100%', sm: '379px' },
    maxWidth: '379px',
    height: { xs: '80px', sm: '240px' },
    borderRadius: '16px',
    overflow: 'hidden',
    boxSizing: 'border-box',
    position: { xs: 'unset', sm: 'relative' },
    backgroundColor: 'neutral.900',
    display: { xs: 'flex', sm: 'block' },
    gap: { xs: '16px', sm: 'unset' },
    alignItems: 'center',
    padding: { xs: '0px 16px', sm: 'unset' },
  },
  heading: {
    whiteSpace: { xs: 'nowrap', sm: 'unset' },
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  description: {
    whiteSpace: { xs: 'nowrap', sm: 'unset' },
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  subText: {
    fontSize: { xs: '12px', sm: 'unset' },
  },
  iconTag: {
    position: { xs: 'unset', sm: 'absolute' },
    zIndex: '2',
    top: { xs: 'unset', sm: '16px' },
    left: { xs: 'unset', sm: '16px' },
  },
  imageWrapper: {
    display: { xs: 'none', sm: 'block' },
    width: '100%',
    height: '100%',
    img: {
      objectFit: 'cover',
    },
  },
  infoContainer: {
    maxWidth: 'calc(100% - 70px)',
    zIndex: 1,
    position: { xs: 'unset', sm: 'absolute' },
    bottom: { xs: 'unset', sm: '24px' },
    left: { xs: 'unset', sm: '16px' },
    right: { xs: 'unset', sm: 'unset' },
    color: 'common.white',
    display: 'flex',
    flexDirection: { xs: 'column-reverse', sm: 'column' },
  },
  videoWrapper: {
    display: { xs: 'none', sm: 'block' },
    width: '100%',
    height: '100%',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>

export default styles
