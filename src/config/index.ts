import { LocalePrefix } from 'node_modules/next-intl/dist/types/src/shared/types'

const locateConfig = {
  defaultLocale: 'en',
  locales: ['en', 'de'],
  /**
   * LocalePrefix type
   * @example
   * "as-needed" - locale will be added in pathname only-if its not the default-locale
   * "always" - locale will always be added in pathname
   * "never" - locale wont be added in pathname
   */
  localePrefix: 'never' as LocalePrefix,
}

export const AppConfig = {
  title: 'Next-js Base Setup',
  description:
    'A boilerplate for Next.js with MUI, TypeScript, internationalization and graphql',

  ...locateConfig,
}
