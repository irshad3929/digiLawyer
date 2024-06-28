import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    backgroundColor: 'neutral.1000',
    color: 'common.white',
    padding: '3vw 6vw',
  },
  contentWrapper: {
    gap: '32px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
  },
  heading: {
    minWidth: '163px',
    height: '32px',
    whiteSpace: 'nowrap',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  tabs: {
    height: '32px',
  },
  tab: {
    width: 'max-content',
    height: '32px',
    color: 'common.white',
    backgroundColor: 'neutral.900',
    fontSize: '12px',
    gap: '8px',
    padding: '8px 12px',
    fontWeight: 400,
    lineHeight: '16px',
    borderRadius: '24px',
  },
  cardImages: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: '32px',
    gap: '16px',
  },
  btn: {
    textDecoration: 'none',
    color: 'inherit',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
