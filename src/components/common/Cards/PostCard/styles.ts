import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  card: {
    width: { xs: 'auto', sm: '378px' },
    minHeight: '456px',
    padding: '16px 24px',
    color: 'common.white',
    borderRadius: '8px',
    backgroundColor: 'neutral.950',
  },
  cardMedia: {
    minHeight: '200px',
    borderRadius: '8px',
    objectFit: 'cover',
  },
  dateTimeContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '8px',
    margin: '16px 0px',
  },
  dateTime: {
    display: 'flex',
    flexDirection: 'row',
    gap: '8px',
    fontSize: '0.75rem',
    color: 'neutral.500',
    fontWeight: 500,
    lineHeight: '1rem',
  },
  title: {
    fontSize: '1rem',
    fontWeight: 600,
    marginBottom: '8px',
  },
  description: {
    minHeight: '72px',
    fontSize: '0.875rem',
    color: 'neutral.500',
    lineHeight: '1.5rem',
    textOverflow: 'ellipsis',
  },
  button: {
    all: 'unset',
    fontSize: '0.75rem',
    fontWeight: 500,
    lineHeight: '1rem',
    color: 'common.white',
    marginTop: '1rem',
  },
  dot: {
    width: '4px',
    height: '4px',
    borderRadius: '100px',
    marginTop: '6px',
    backgroundColor: 'neutral.800',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
