import { SxProps } from '@mui/material'

export type { SxProps }

export type Styles<T extends string = string> = Record<T, SxProps>
export type CustomStyles<T extends string = string> = Partial<Styles<T>>
export type StylesClasses<TStyles extends Styles> = keyof TStyles

export const createStyles = <T extends string>(data: Styles<T>) => data

export const getStyles = <T extends string = string>(
  mainStyles: Styles<T>,
  ...customStyles: (CustomStyles<T> | undefined)[]
) => {
  return (names: T | T[], sx?: SxProps): { sx: SxProps } => {
    let ms: SxProps = {}
    let cs: SxProps = {}
    const es = sx ?? {}

    const handleEachName = (name: T) => {
      ms = {
        ...ms,
        ...mainStyles[name],
      } as SxProps

      customStyles.forEach((customStyle) => {
        const newCs = customStyle?.[name]
        if (newCs)
          cs = {
            ...cs,
            ...newCs,
          } as SxProps
      })
    }

    if (!Array.isArray(names)) {
      ;[names].forEach(handleEachName)
    }
    if (Array.isArray(names)) {
      names.forEach(handleEachName)
    }

    const resultantStyles = { ...ms, ...es, ...cs } as SxProps

    return { sx: resultantStyles }
  }
}
