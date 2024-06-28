import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: { xs: 'auto', sm: '389px' },
    minHeight: '385px',
    padding: '24px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
  },
  contentWrapper: {
    minWidth: { xs: 'auto', sm: '341px' },
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '32px',
  },
  cardTitleWrapper: {
    minWidth: '100%',
    minHeight: '32px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  cardTitle: {
    fontSize: '20px',
    lineHeight: '24px',
    fontWeight: 600,
  },
  cardTitleImageWrapper: {
    minWidth: '32px',
    minHeight: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100px',
  },
  cardTitleImage: {
    minWidth: '16px',
    minHeight: '16px',
    gap: '8px',
    padding: '8px',
  },
  border: {
    width: '100%',
    height: '1px',
    marginTop: '24px',
    marginBottom: '24px',
  },
  infoContainer: {
    marginBottom: '32px',
  },
  title: {
    fontSize: '12px',
    fontWeight: 500,
    marginBottom: '16px',
  },
  descWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '24px',
  },
  descImage: {
    width: '16px',
    height: '16px',
    marginRight: '16px',
  },
  description: {
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '16px',
  },
})

export const whiteStyles = createStyles({
  wrapper: {
    backgroundColor: 'inherit',
  },
  cardTitle: {
    color: 'neutral.900',
  },
  border: {
    backgroundColor: 'neutral.100',
  },
  title: {
    color: 'neutral.900',
  },

  description: {
    color: '#1A1A1A',
  },
})

export const blackStyles = createStyles({
  wrapper: {
    backgroundColor: 'neutral.950',
  },
  cardTitle: {
    color: 'common.white',
  },
  cardTitleImageWrapper: {
    backgroundColor: 'neutral.900',
  },
  cardTitleImage: {
    backgroundColor: 'neutral.900',
  },
  border: {
    backgroundColor: 'neutral.300',
  },

  title: {
    color: 'common.white',
  },
  description: {
    color: 'common.white',
  },
  descImage: {
    color: 'common.white',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>

export default styles
