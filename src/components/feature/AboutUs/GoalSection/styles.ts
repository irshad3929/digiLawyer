import { StylesClasses, createStyles } from '@utils/styles'

const styles = createStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'neutral.1000',
    width: '100vw',
  },
  sectionHeaderWrapper: {
    backgroundColor: 'neutral.1000',
  },
  heading: {
    color: 'common.white',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    gap: { md: '0px', xs: '10px' },
    justifyContent: 'space-between',
    padding: { xs: '3vw 6vw', md: '3vw 6vw' },
  },
  cardWrapper: {
    backgroundColor: 'neutral.950',
    width: {
      xs: 'calc((100%-308px)/2)',
      md: 'calc((100% - 342px) / 2)',
    },
    height: '308px',
  },
  cardIcon: {
    background: 'none',
    border: 'none',
    height: { xs: '32px', md: '48px' },
    width: { xs: '32px', md: '48px' },
  },
  cardHeading: {
    color: 'common.white',
  },
  image: {
    width: { xs: '330px', md: '282px' },
    height: { xs: '308px', md: '308px' },
    borderRadius: '8px',
  },
})

export type StylesClassNames = StylesClasses<typeof styles>
export default styles
