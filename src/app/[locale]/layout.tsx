import type { Metadata } from 'next'
import { AppConfig } from '@config'
import { I18nProvider, ApolloWrapper, ThemeProvider } from '@providers'
import { DefaultLayout } from '@layouts'
import './globals.css'

export const metadata: Metadata = {
  title: AppConfig.title,
  description: AppConfig.description,
}

type RootLayoutProps = Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>

export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  return (
    <html lang={locale}>
      <I18nProvider locale={locale}>
        <ThemeProvider>
          <ApolloWrapper>
            <body>
              <DefaultLayout>{children}</DefaultLayout>
            </body>
          </ApolloWrapper>
        </ThemeProvider>
      </I18nProvider>
    </html>
  )
}
