import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: '260px',
    height: '228px',
    borderRadius: '8px',
    overflow: 'hidden',
    boxSizing: 'border-box',
    position: 'relative',
    backgroundColor: 'custom.whisper',
    padding: '32px 24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  heading: {
    color: 'neutral.950',
  },
  description: {
    color: 'neutral.500',
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': '4',
    textOverflow: 'ellipsis',
  },

  iconTag: {
    borderRadius: '50%',
    height: { xs: '32px', md: '48px' },
    width: { xs: '32px', md: '48px' },
    backgroundColor: '#E7E7E7',
  },

  infoContainer: {
    color: 'common.white',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>

export default styles
