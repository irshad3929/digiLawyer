'use client'

import { createTheme } from '@mui/material/styles'
import { ForceAny } from '@utils/typescript'
import { sora } from './fonts'
import { lightThemePalette } from './light.theme'
import {
  CustomPaletteOptions,
  CustomTypographyVariants,
  // StyleOverrideProps,
} from '../../../utils/styles/types'

// type overrides for the theme
declare module '@mui/material/styles' {
  interface TypographyVariants extends CustomTypographyVariants {}
  interface TypographyVariantsOptions {
    [key: string]: ForceAny
  }
  interface Palette {
    [key: string]: ForceAny
  }
  interface PaletteOptions extends CustomPaletteOptions {}

  /* Uncomment the following code to add custom breakpoints */
  // interface BreakpointOverrides {
  //   xs: false; // removes the `xs` breakpoint
  //   sm: false;
  //   md: false;
  //   lg: false;
  //   xl: false;
  //   mobile: true; // adds the `mobile` breakpoint
  //   tablet: true;
  //   laptop: true;
  //   desktop: true;
  // }
}

/**
 * @description Right now, the theme is using the light theme options and the inter font.
 * Create new theme option or add new font as per the requirement.
 */
const theme = createTheme({
  // All the colors- palette should be defined in the theme options file
  palette: lightThemePalette,
  typography: {
    fontFamily: sora.style.fontFamily,
    fontSize: 16,
    h1: {
      fontSize: '40px',
      fontWeight: '600',
    },
    h2: {
      fontSize: '32px',
      fontWeight: '600',
    },
    h3: {
      fontSize: '24px',
      fontWeight: '600',
    },
    h4: {
      fontSize: '20px',
      fontWeight: '600',
    },
    h5: { fontSize: '16px', fontWeight: '600' },
    h6: { fontSize: '14px', fontWeight: '400' },
    body2: { fontSize: '12px', fontWeight: '400' },
    body1: { fontSize: '10px', fontWeight: '400' },

    fontWeightRegular: '400',
    fontWeightMedium: '500',
    fontWeightLight: '600',
    fontWeightBold: '700',
    // TODO: For additional font
  },

  // Uncomment the following code to add custom breakpoints
  // breakpoints: {
  //   values: {
  //     mobile: 0,
  //     tablet: 601,
  //     laptop: 1024,
  //     desktop: 1200,
  //   },
  // },

  /**
   * Include any mui component override here to be applied globally
   * To create custom mui component @see https://mui.com/material-ui/customization/creating-themed-components/
   */
  components: {
    // MuiCssBaseline: {
    //   styleOverrides: {
    //     body: ({ theme }: StyleOverrideProps) => ({
    //       '& *': {
    //         '&::-webkit-scrollbar ': {
    //           width: '12px',
    //           height: '4px',
    //         },

    //         '&::-webkit-scrollbar-track': {
    //           backgroundColor: theme.palette.custom.track,
    //           borderRadius: '14px',
    //         },

    //         '&::-webkit-scrollbar-thumb': {
    //           backgroundColor: theme.palette.custom.thumb,
    //           borderRadius: '14px',
    //         },

    //         '&::-webkit-scrollbar-thumb:hover': {
    //           backgroundColor: theme.palette.custom.main,
    //         },
    //       },
    //     }),
    //   },
    // },
    MuiButton: {
      // The props to change the default for.
      // Uncomment -> No more ripple, on the whole application 💣!
      // defaultProps: {
      //   disableRipple: true,
      // },
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {},
      },
      // defaultProps: {
      //   margin: "dense",
      // },
    },
  },
})

export default theme
