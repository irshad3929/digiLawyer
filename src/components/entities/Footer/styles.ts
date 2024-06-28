import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: { xs: 'auto', sm: '88vw' },
    margin: '3vw auto',
    backgroundColor: 'neutral.1000',
    borderRadius: '16px',
    padding: { xs: '40px 32px', sm: '64px 48px' },
    gap: '40px',
    marginTop: '40px',
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    color: 'common.white',
  },
  mainSection: {
    minHeight: '328px',
    gap: '32px',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  leftSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
  },
  logoInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '16px',
  },
  logoImage: {
    width: '144px',
    height: '32px',
  },
  descText: {
    fontSize: '14px',
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  contactInfoItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  contactInfoItemIcon: {
    width: '16px',
    height: '16px',
  },
  contactInfoItemText: {
    fontSize: '14px',
  },
  socialMedia: {
    display: 'flex',
    gap: '10px',
  },
  socialMediaItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  socialMediaItemIcon: {
    width: '24px',
    height: '24px',
  },
  appImageContainer: {
    height: '40px',
    width: '100%',
    gap: '8px',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  appImage: {
    minWidth: '120px',
    height: '40px',
    borderRadius: '4px',
    border: '1px solid',
    borderColor: 'neutral.900',
    gap: '8px',
  },
  rightSection: {
    width: { xs: 'auto', sm: '592px' },
    minHeight: '328px',
    gap: '32px',
  },
  rightSectionItems: {
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    justifyContent: 'space-between',
  },
  rightSectionItem: {
    width: '176px',
    display: 'flex',
    flexDirection: 'column',
    padding: '8px 0px',
    gap: '24px',
  },
  rightSectionItemTitle: {
    color: 'primary.50',
    height: '24px',
    fontSize: '16px',
    fontWeight: 'semibold',
    lineHeight: '24px',
  },
  rightSectionItemDesc: {
    height: '24px',
    gap: '8px',
  },
  rightSectionItemDescText: {
    fontSize: '14px',
    lineHeight: '24px',
  },
  border: {
    height: '1px',
    backgroundColor: '#444',
    marginTop: '40px',
  },
  bottomSection: {
    marginTop: '24px',
    minHeight: { xs: 'auto', sm: '24px' },
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    justifyContent: 'space-between',
    gap: '24px',
  },
  bottomSectionItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
  },
  bottomSectionItemIcon: {
    width: '30px',
    height: '30px',
  },
  bottomSectionMiddlePart: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '24px',
  },
  bottomSectionItemText: {
    flexWrap: 'wrap',
    whiteSpace: 'nowrap',
    fontSize: { xs: '11px', sm: '12px' },
  },
  bottomSectionLastPart: {
    display: 'flex',
    alignItems: 'center',
  },
  arrowUp: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '24px',
    height: '24px',
    marginRight: '8px',
    borderRadius: '100px',
    backgroundColor: 'neutral.500',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
