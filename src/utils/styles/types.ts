import { PaletteOptions } from '@mui/material'
import { TypographyStyleOptions } from '@mui/material/styles/createTypography'
import { ForceAny } from '@utils/typescript'

type CustomerPaletteColorOptions = {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
  950: string
  1000: string
}

type ColorsShades = 'neutral' | 'red' | 'green' | 'yellow'
// Record
export type CustomPaletteOptions = Record<
  ColorsShades,
  CustomerPaletteColorOptions
> & {
  custom: {
    transparentGrey: string
    transparentLightGrey: string
    whisper: string
    ratingStar: string
  }
}

export type CustomTypographyVariants = {
  p1: TypographyStyleOptions
}

export type StyleOverrideProps<TOwnerState extends ForceAny = ForceAny> = {
  theme: {
    palette: PaletteOptions
    // Add any other theme properties as per requirement
  }
  ownerState?: TOwnerState
}
