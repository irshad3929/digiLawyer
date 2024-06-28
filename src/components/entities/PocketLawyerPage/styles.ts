import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'common.white',
    marginTop: '20px',
    padding: { xs: '0px', md: '0px' },
    gap: '10px',
  },
  imageContaier: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: { xs: '10px', md: '10%' },
    paddingRight: { xs: '10px', md: '10%' },
  },
  image: {
    height: { xs: '400px', md: '598px' },
    width: { xs: 'auto', md: '800px' },
    minWidth: '350px',
  },
  supportCard: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: { xs: '40px', md: '0px' },
    backgroundColor: 'common.white',
    padding: { xs: '0px 0px', md: '0px 13%' },
  },
  feature: {
    backgroundColor: '#1C1C1C',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 0px',
    // margin:{xs:'0px 0px ' ,md:'0px 10%'}
  },
  useCaseWrapper: {
    // backgroundColor:'#2D2D2D',
  },
  featureSupportCard: {
    width: 'auto',
    height: 'auto',
    whiteSpace: 'nowrap',
    backgroundColor: '#2D2D2D',
    color: 'common.white',
  },
  cardHeading: {
    color: 'common.white,',
  },
  cardDescription: {
    color: 'common.white,',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>

export default styles
