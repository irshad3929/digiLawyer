import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: '100%',
    maxWidth: '384px',
    borderRadius: '16px',
    overflow: 'hidden',
    boxSizing: 'border-box',
    position: 'relative',
    backgroundColor: 'neutral.900',
    padding: '32px 24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  rating: {
    display: 'flex',
    color: 'custom.ratingStar',
  },
  image: {
    width: '48px',
    height: '48px',
  },
  infoWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    '.userName': {
      color: 'neutral.50',
    },
    '.userDesignation': {
      color: 'neutral.400',
    },
  },
  userWrapper: {
    display: 'flex',
    gap: '16px',
  },
  text: {
    color: 'neutral.50',
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': '7',
    textOverflow: 'ellipsis',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>

export default styles
